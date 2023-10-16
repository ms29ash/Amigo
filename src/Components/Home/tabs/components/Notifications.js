import React from "react";
import { UserState } from "../../../../context/UserProvider";
import { ChatState } from "../../../../context/ChatProvider";
import Notification from "./Notification";

function Notifications() {
  const { state } = ChatState();

  return (
    <>
      {state.notifications?.length > 0 ? (
        state.notifications?.map((n) => {
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
