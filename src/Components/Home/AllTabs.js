import { UserState } from "../../context/UserProvider";
import AllTabsHeader from "./AllTabsHeader";
import ChatTab from "./tabs/ChatTab";
import ProfileTab from "./tabs/ProfileTab";
import SearchTab from "./tabs/SearchTab";

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
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default AllTabs;
