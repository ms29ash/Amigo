import ScrollableFeed from "react-scrollable-feed";
import Msg from "./Msg";
import { UserState } from "../../context/UserProvider";
import axios from "../../axios";
import { useQuery } from "@tanstack/react-query";
import { ChatState } from "../../context/ChatProvider";

function Chat() {
  //Fetching Chats
  const { user } = UserState();
  const { selectedChat } = ChatState();
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };
  const fetchChats = () =>
    axios.get(`/message/${selectedChat?._id}`, { headers });

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["messages", selectedChat?._id],
    queryFn: fetchChats,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    enabled: selectedChat ? true : false,
  });

  return (
    <>
      {
        <ScrollableFeed
          className="flex flex-col justify-end w-full "
          forceScroll={true}
        >
          {data?.data?.messages.map((msg) => {
            return <Msg key={msg._id} msg={msg} />;
          })}
        </ScrollableFeed>
      }
    </>
  );
}

export default Chat;
