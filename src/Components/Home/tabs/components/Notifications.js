import React from "react";
import { AiFillBell } from "react-icons/ai";
import { UserState } from "../../../../context/UserProvider";
import { ChatState } from "../../../../context/ChatProvider";
import axios from "../../../../axios";
import { useQuery } from "@tanstack/react-query";

function Notifications() {
  const { user } = UserState();
  const { notifications, setNotifications } = ChatState();

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  //Fetching Chats
  const fetchNotifications = async () => {
    const data = await axios.get("/updates/notifications", { headers });
    setNotifications(data?.data?.notifications);
    return data;
  };

  const { data } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
    // enabled: headers,
  });

  return (
    <>
      {notifications?.length > 0 ? (
        notifications?.map((n) => {
          return <Notification key={n._id} data={n} />;
        })
      ) : (
        <div className="w-full flex justify-center py-[50%]">
          <p>Nothing to show</p>
        </div>
      )}
    </>
  );
}

export default Notifications;

function Notification({ data }) {
  return (
    <div>
      <div className="flex py-4  px-4 space-x-4 items-center">
        <div className="text-2xl text-green bg-black p-3 rounded-full">
          <AiFillBell />
        </div>
        <div>
          <p className="opacity-90">{data?.message} </p>
        </div>
      </div>
    </div>
  );
}
