import React from "react";
import { UserState } from "../../../context/UserProvider";
import { ChatState } from "../../../context/ChatProvider";

function ProfileTab() {
  const { user } = UserState();
  const { logout } = ChatState();

  return (
    <div className="w-full h-full flex flex-col items-center justify-around ">
      <div className="flex flex-col  items-center">
        <img className="rounded-full w-[50%]" src={user?.profilePic} alt="" />
        <div>
          <h2 className="capitalize text-center mt-4 font-bold  text-4xl">
            {user?.name}
          </h2>
          <p className=" my-2 text-center  text-xl">{user?.email}</p>
        </div>
      </div>
      <div className="py-[30%] w-full flex justify-center ">
        <button
          className="bg-green  w-[80%] font-bold  py-3 rounded-md text-black hover:bg-sgreen "
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileTab;
