import React from 'react'
import NotificationBadge from "react-notification-badge";

function SingleChat({ n }) {
    return (
        <div className="flex cursor-pointer hover:text-black px-4 py-3 hover:bg-green w-full items-center group  ">
            <img
                className=" mr-3 w-[60px] h-[60px] rounded-full "
                src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
                alt=""
            />
            <div className="flex-1">
                <div className=" w-full flex items-center justify-between ">
                    <h2 className="font-bold text-xl flex-1 whitespace-nowrap ">
                        Rohit Sharma
                    </h2>
                    <NotificationBadge
                        className="!bg-green !text-black group-hover:!bg-lightGray group-hover:!text-white "
                        count={3}
                    />
                </div>
                <div className="flex items-center text-sm mt-1 justify-between">
                    <p className="flex-1">Rohit is in form today!! {n} </p>
                    <small>2h ago</small>
                </div>
            </div>
        </div>
    )
}

export default SingleChat