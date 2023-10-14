import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatSection from "./ChatSection";
import WriteMsg from "./WriteMsg";
import { ChatState } from "../../context/ChatProvider";

function ChatBox() {

    const { selectedChat } = ChatState()

    return (
        <>
            {selectedChat ? <div className="flex-[3_3_0%] w-full h-screen max-h-screen  overflow-y-hidden flex flex-col ">
                <ChatBoxHeader selectedChat={selectedChat}  />
                <div className="flex-1 flex  overflow-y-auto">
                    <ChatSection />
                </div>
                <WriteMsg selectedChat={selectedChat}  />
            </div> :
                <div className="flex-[3_3_0%] w-full h-screen max-h-screen  overflow-y-hidden flex flex-col" >

                </div>
            }
        </>
    );
}

export default ChatBox;
