import { useQuery } from "@tanstack/react-query";
import axios from "../../../../axios";
import { UserState } from "../../../../context/UserProvider";
import { ChatState } from "../../../../context/ChatProvider";
import { useEffect } from "react";

function Requests() {
  const { user, socket } = UserState();
  const { requests, setRequests } = ChatState();

  //Fetching requests for user
  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  const fetchReq = async () => {
    const data = await axios.get("/updates/requests", { headers });
    setRequests(data?.data?.requests);
    return data;
  };

  const { data } = useQuery({
    queryKey: ["requests"],
    queryFn: fetchReq,
    // enabled: headers,
  });

  return (
    <>
      {requests?.length > 0 ? (
        requests?.map((req) => {
          return <Request key={req._id} req={req} />;
        })
      ) : (
        <div className="w-full flex justify-center py-[50%]">
          <p>Nothing to show</p>
        </div>
      )}
    </>
  );
}

export default Requests;

const Btn = " rounded-md flex-1 border-2 text-xs font-bold py-1 transition-all";

function Request({ req }) {
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
          >
            Accept
          </button>
          <button
            className={`${Btn}  text-white  border-black bg-black hover:bg-gray `}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
