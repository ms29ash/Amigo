import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import tw from "tailwind-styled-components";

function UpdateTabHeader({ selected, setSelected }) {
  return (
    <>
      <div className="flex px-[5%] ">
        <Opt
          selected={selected === "request" && "selected"}
          onClick={() => setSelected("request")}
        >
          <HiOutlineUserCircle />
        </Opt>
        <Opt
          selected={selected === "notification" && "selected"}
          onClick={() => setSelected("notification")}
        >
          <IoMdNotificationsOutline />
        </Opt>
      </div>
      <hr />
    </>
  );
}

export default UpdateTabHeader;
const Opt = tw.div` flex-1 flex items-center justify-center text-3xl hover:bg-lightGray py-3 cursor-pointer ${(
  p
) => p.selected === "selected" && " bg-black hover:bg-black "} `;
