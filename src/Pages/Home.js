import React from "react";
import AllChats from "../Components/Home/AllChats";
import ChatBox from "../Components/Home/ChatBox";
import { UserState } from "../context/UserProvider";

function Home() {
    const { user } = UserState()
    return (
        <div className="flex h-screen max-h-screen ">
            {user && <AllChats />}
            {user && <ChatBox />}
        </div>
    );
}

export default Home;
