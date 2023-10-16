import React from "react";
import ChatBox from "../Components/Home/ChatBox";
import { UserState } from "../context/UserProvider";
import AllTabs from "../Components/Home/AllTabs";

function Home() {
  const { user } = UserState();
  return (
    <div className="flex h-screen max-h-screen ">
      {user && <AllTabs />}
      {user && <ChatBox />}
    </div>
  );
}

export default Home;
