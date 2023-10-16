import React from "react";
import { UserState } from "../../../../context/UserProvider";
import { ChatState } from "../../../../context/ChatProvider";
import axios from "../../../../axios";
import { useQuery } from "@tanstack/react-query";
import Notification from "./Notification";

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
