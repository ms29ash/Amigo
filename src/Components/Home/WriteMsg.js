import { AiOutlinePlus } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { FiSend } from "react-icons/fi";



function WriteMsg({selectedChat}) {


    return (
        <div className="flex rounded-2xl  bg-gray p-4 m-3 space-x-3 ">
            <AiOutlinePlus className="text-green text-2xl" />
            <input
                type="text"
                placeholder="Write message ..."
                className="bg-gray flex-1 outline-none"
            />
            <BiSmile className="text-green text-2xl" />
            <FiSend className="text-green text-2xl" />
        </div>
    );
}

export default WriteMsg;
