import { useQuery } from "@tanstack/react-query";
import axios from "../../../../axios";
import { UserState } from "../../../../context/UserProvider";
import { ChatState } from "../../../../context/ChatProvider";
import Request from "./Request";

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

  //filter requests
  function filteReq(req) {
    return req?.recipient._id === user._id;
  }

  return (
    <>
      {requests?.length > 0 ? (
        requests?.filter(filteReq).map((req) => {
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
