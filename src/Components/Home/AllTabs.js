import { UserState } from "../../context/UserProvider";
import AllTabsHeader from "./AllTabsHeader";
import ChatTab from "./tabs/ChatTab";
import ProfileTab from "./tabs/ProfileTab";
import SearchTab from "./tabs/SearchTab";
import UpdateTab from "./tabs/UpdateTab";

function AllTabs() {
  const { tab } = UserState();

  return (
    <>
      <div className="flex-1 bg-gray h-screen overflow-y-hidden max-h-screen min-w-[300px] ">
        <AllTabsHeader />
        {tab === "chat" ? (
          <ChatTab />
        ) : tab === "search" ? (
          <SearchTab />
        ) : tab === "profile" ? (
          <ProfileTab />
        ) : tab === "updates" ? (
          <UpdateTab />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default AllTabs;
