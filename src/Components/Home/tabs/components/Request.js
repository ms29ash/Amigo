import { ChatState } from "../../../../context/ChatProvider";
import { UserState } from "../../../../context/UserProvider";

function Request({ req }) {
  const { user } = UserState();
  const { socket } = ChatState();

  const onAccept = () => {
    let data = {
      token: user?.token,
      id: req?.requester._id,
      chatName: req?.requester.name,
      reqId: req._id,
      username: req?.recipient.name,
    };
    if (socket) {
      socket.emit("acceptReq", data);
    }
  };

  const onReject = () => {
    let data = {
      id: req?.requester._id,
      username: req?.recipient.name,
      token: user.token,
      reqId: req._id,
    };
    if (socket) {
      socket.emit("rejectReq", data);
    }
  };

  return (
    <div className="flex py-4  items-center px-6 ">
      <img
        className=" mr-3 w-[60px] h-[60px] rounded-full "
        src={
          req?.requester.profilePic ||
          "https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
        }
        alt=""
      />
      <div>
        <p className="opacity-90">
          <span className="capitalize font-bold">{req?.requester?.name}</span>{" "}
          sent you a request
        </p>
        <div className="flex w-full items-center space-x-2 mt-2">
          <button
            className={`${Btn} bg-green text-black  border-green hover:bg-sgreen   `}
            onClick={onAccept}
          >
            Accept
          </button>
          <button
            className={`${Btn}  text-white  border-black bg-black hover:bg-gray `}
            onClick={onReject}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
const Btn = " rounded-md flex-1 border-2 text-xs font-bold py-1 transition-all";

export default Request;
