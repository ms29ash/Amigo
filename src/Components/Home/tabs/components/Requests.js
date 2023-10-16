import { UserState } from "../../../../context/UserProvider";
import { ChatState } from "../../../../context/ChatProvider";
import Request from "./Request";
import reqFilter from "../../../../Logics/ReqLogics";

function Requests() {
  const { user, socket } = UserState();
  const { state } = ChatState();

  return (
    <>
      {state.requests?.length > 0 ? (
        state.requests
          ?.filter((req) => reqFilter(req, user))
          .map((req) => {
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
