import React from "react";
import { UserState } from "../../context/UserProvider";
import { useMutation } from "@tanstack/react-query";
import axios from "../../axios";
import { ChatState } from "../../context/ChatProvider";

function SearchUser({ data, setKeyword, setActive }) {
  const { user } = UserState();
  const { socket } = ChatState();
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };

  //mutation
  const { status, mutate } = useMutation({
    mutationFn: (chat) => {
      return axios.post("/chat", chat, { headers });
    },
  });

  const onChatHandler = (e) => {
    console.log("click");
    e.stopPropagation();
    if (data) {
      const chat = {
        token: user?.token,
        id: data._id,
        chatName: data.name,
      };
      socket.emit("newChat", chat);
    }
  };
  return (
    <div className="flex px-4 py-3 hover:bg-black  items-center group w-full relative  max-w-full ">
      <img
        className=" mr-3 w-[60px] h-[60px] rounded-full "
        src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
        alt=""
      />

      <div className=" relative w-[70%] flex flex-row items-center ">
        <div className="  flex  w-[70%]    flex-col  justify-between overflow-x-hidden ">
          <h2 className="font-bold text-xl whitespace-nowrap capitalize ">
            {data?.name}
          </h2>
        </div>
      </div>
      <button
        onClick={onChatHandler}
        className="bg-green hover:bg-sgreen text-black text-xs font-bold rounded-md px-2 py-1"
      >
        Connect
      </button>
    </div>
  );
}

export default SearchUser;
