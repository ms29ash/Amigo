import ScrollableFeed from "react-scrollable-feed";
import Msg from "./Msg";
import { UserState } from "../../context/UserProvider";
import axios from "../../axios";
import { useQuery } from "@tanstack/react-query";
import { ChatState } from "../../context/ChatProvider";
import { useEffect } from "react";

function Chat() {
  //Fetching Chats
  const { user } = UserState();
  const { state, dispatch, socket } = ChatState();
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };
  const fetchMessages = async () => {
    const data = await axios.get(`/message/${state.selectedChat?._id}`, {
      headers,
    });
    dispatch({ type: "setMsg", payload: data?.data?.messages });

    return data;
  };

  const { isError } = useQuery({
    queryKey: ["messages", state.selectedChat?._id],
    queryFn: fetchMessages,
    enabled: state.selectedChat ? true : false,
  });

  useEffect(() => {
    if (socket) {
      socket.on("newMsg", (msg) => {
        dispatch({ type: "addMsg", payload: msg });
      });
    }
  }, [socket?.message]);

  return (
    <>
      {state.messages && (
        <div className="w-full justify-end flex items-end overflow-y-hidden">
          <ScrollableFeed
            className=" w-full h-fit !max-h-full overflow-y-auto "
            forceScroll={true}
          >
            {state.messages.map((msg) => {
              return <Msg key={msg._id} msg={msg} />;
            })}
          </ScrollableFeed>
        </div>
      )}
      {isError && (
        <div className="flex h-full w-full items-center justify-center">
          <p>Something went wrong</p>
        </div>
      )}
    </>
  );
}

export default Chat;
