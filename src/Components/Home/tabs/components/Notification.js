import { AiFillBell } from "react-icons/ai";

function Notification({ data }) {
  return (
    <div>
      <div className="flex py-4  px-4 space-x-4 items-center">
        <div className="text-2xl text-green bg-black p-3 rounded-full">
          <AiFillBell />
        </div>
        <div>
          <p className="opacity-90">{data?.message} </p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
