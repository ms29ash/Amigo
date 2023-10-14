import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import axios from "../../axios";
import { UserState } from "../../context/UserProvider";

function WriteMsg({ selectedChat }) {
  const { user } = UserState();
  const [msg, setMsg] = useState();

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
    if (msg !== "") {
      const data = {
        chatId: selectedChat._id,
        content: msg,
      };
      mutate(data, {
        onSuccess: (data) => {
          console.log(data);
          setMsg("");
        },
        onError: (err) => {
          console.log(err);
        },
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
