import React from "react";
import TimeDifference from "../../../utitlity/TimeDiff";
import NotificationBadge from "../../../utitlity/NotificationBadge";
import { ChatState } from "../../../context/ChatProvider";
import { getSenderName } from "../../../Logics/ChatLogis";
import { UserState } from "../../../context/UserProvider";

function SingleChat({ chat }) {
  const { dispatch } = ChatState();
  const { user } = UserState();
  return (
    <>
      <div
        onClick={() => {
          dispatch({ type: "selectChat", payload: chat });
        }}
        className="flex   cursor-pointer px-4 py-3 hover:bg-black  items-center group w-full relative  max-w-full"
      >
        <img
          className=" mr-3 w-[60px] h-[60px] rounded-full "
          src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
          alt=""
        />

        <div className=" relative w-[70%] flex flex-row items-center ">
          <div className="  flex  w-[70%]    flex-col  justify-between overflow-x-hidden ">
            <h2 className="font-bold text-xl whitespace-nowrap capitalize ">
              {/* {chat.chatName} */}
              {getSenderName(chat?.users, user)}
            </h2>

            <p className="  truncate">{chat?.latestMsg?.content}</p>
          </div>
          <div className=" right-0 top-0 bottom-0 absolute flex flex-col items-end  justify-center text-sm  w-[30%] z-10  ">
            <NotificationBadge classes="bg-green text-black mb-4" count={3} />

            <p className="text-xs">
              {chat.latestMsg && (
                <>
                  <TimeDifference date={chat?.latestMsg?.updatedAt} /> ago
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-auto bg-lightGray border-none h-[1px] w-[95%]" />
    </>
  );
}

export default SingleChat;
