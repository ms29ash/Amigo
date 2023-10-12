import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatSection from "./ChatSection";
import WriteMsg from "./WriteMsg";

function ChatBox() {
    return (
        <div className="flex-[3_3_0%] w-full h-screen max-h-screen  overflow-y-hidden flex flex-col ">
            <ChatBoxHeader />
            <div className="flex-1  overflow-y-auto">
                <ChatSection />
            </div>
            <WriteMsg />
        </div>
    );
}

export default ChatBox;
