import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import tw from "tailwind-styled-components";
import { ChatState } from "../../../context/ChatProvider";
import NotificationBadge from "../../../utitlity/NotificationBadge";

function UpdateTabHeader({ selected, setSelected }) {
  const { requests, notifications } = ChatState();
  return (
    <>
      <div className="flex px-[5%] ">
        <Opt
          selected={selected === "request" && "selected"}
          onClick={() => setSelected("request")}
        >
          <HiOutlineUserCircle />
          <NotificationBadge
            classes="bg-green absolute right-3 text-black -top-2 "
            count={requests?.length}
          />
        </Opt>
        <Opt
          selected={selected === "notification" && "selected"}
          onClick={() => setSelected("notification")}
        >
          <IoMdNotificationsOutline />
          <NotificationBadge
            classes="bg-green relative right-3 text-black -top-2 "
            count={notifications?.length}
          />
        </Opt>
      </div>
      <hr />
    </>
  );
}

export default UpdateTabHeader;
const Opt = tw.div` relative flex-1 flex items-center justify-center text-3xl hover:bg-lightGray py-3 cursor-pointer ${(
  p
) => p.selected === "selected" && " bg-black hover:bg-black "} `;
