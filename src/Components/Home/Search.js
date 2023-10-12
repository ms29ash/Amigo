import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from 'react-icons/rx'

function Search() {
    return (
        <div className="bg-lightGray w-full pl-2  py-2 rounded-full flex items-center ">
            <input
                className="bg-lightGray outline-none pl-2 flex-1 "
                type="text"
                placeholder="Search Name"
            />
            <div className="text-white mx-4 " >
                <RxCross2 />
            </div>
            <div className="bg-green text-black  text-2xl p-2 rounded-full mr-2">
                <AiOutlineSearch />
            </div>
        </div>
    )
}

export default Search