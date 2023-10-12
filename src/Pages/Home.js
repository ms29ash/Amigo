import React from "react";
import AllChats from "../Components/Home/AllChats";
import ChatBox from "../Components/Home/ChatBox";

function Home() {
    return (
        <div className="flex h-screen max-h-screen ">
            <AllChats />
            <ChatBox />
        </div>
    );
}

export default Home;
