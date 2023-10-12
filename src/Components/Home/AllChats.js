import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Search from "./Search";
import SingleChat from "./SingleChat";

function AllChats() {
    return (
        <div className="flex-1 bg-gray h-screen overflow-y-hidden max-h-screen ">
            <div className="p-4">
                <div className="flex justify-between items-center p-4 ">
                    <h1 className="text-2xl font-bold">Chats</h1>
                    <BsThreeDots className=" hover:bg-green  hover:text-black cursor-pointer rounded-full p-1 text-3xl" />
                </div>

                <Search />
            </div>
            <div className="overflow-y-auto h-full pb-48  ">
                {Array(30)
                    .fill("")
                    .map((i, n) => {
                        return (
                            <SingleChat key={n} n={n} />
                        );
                    })}
            </div>
        </div>
    );
}

export default AllChats;
