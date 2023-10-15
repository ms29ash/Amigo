import React from "react";
import SingleChat from "./SingleChat";

function ChatTab({ chats }) {
  return (
    <div className="overflow-y-auto overflow-x-hidden h-full w-full pb-48  ">
      {chats &&
        chats.map((chat) => {
          return <SingleChat key={chat._id} chat={chat} />;
        })}
    </div>
  );
}

export default ChatTab;
