import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import axios from "../../axios";
import { UserState } from "../../context/UserProvider";
import { ChatState } from "../../context/ChatProvider";

function WriteMsg({ selectedChat, socket }) {
  const { user } = UserState();
  const [msg, setMsg] = useState("");

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  //mutation
  const { status, mutate } = useMutation({
    mutationFn: (message) => {
      return axios.post("/message/new", message, { headers });
    },
  });

  const onSubmit = () => {
    if (socket && selectedChat && msg !== "") {
      socket.emit("newMsg", {
        token: user?.token,
        content: msg,
        chatId: selectedChat?._id,
      });
    }
  };

  return (
    <div className="flex rounded-2xl  bg-gray p-4 m-3 space-x-3 ">
      <AiOutlinePlus className="text-green text-2xl" />
      <input
        type="text"
        placeholder="Write message ..."
        className="bg-gray flex-1 outline-none"
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
      />
      <BiSmile className="text-green text-2xl" />
      <FiSend
        onClick={onSubmit}
        className="cursor-pointer text-green text-2xl opacity-70 hover:opacity-100"
      />
    </div>
  );
}

export default WriteMsg;
