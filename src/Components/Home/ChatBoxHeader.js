import { BsThreeDots } from "react-icons/bs";
import { getSenderName } from "../../Logics/ChatLogis";
import { UserState } from "../../context/UserProvider";

function ChatBoxHeader({ selectedChat }) {
  const { user } = UserState();
  return (
    <div className="bg-lightGray px-6 ">
      <div className="flex items-center justify-between">
        <div className="flex cursor-pointer  px-4 py-3 items-center group hover:bg-gray w-fit ">
          <img
            className=" mr-3 w-[60px] h-[60px] rounded-full "
            src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
            alt=""
          />
          <div className="flex-1">
            <h2 className="font-bold text-xl flex-1 whitespace-nowrap capitalize ">
              {getSenderName(selectedChat?.users, user)}
            </h2>
            <p className="flex-1 opacity-80 ">offline</p>
          </div>
        </div>
        <div>
          <BsThreeDots className="rotate-90 hover:bg-green  hover:text-black cursor-pointer rounded-full p-1 text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default ChatBoxHeader;
