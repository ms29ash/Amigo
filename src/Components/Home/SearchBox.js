import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from 'react-icons/rx'

function SearchBox({ setActive, active, setKeyword, refetch, keyword }) {


    return (
        <div className="bg-lightGray w-full pl-2  py-2 rounded-full flex items-center ">
            <input
                className={`bg-lightGray outline-none pl-2 w-full border-2 border-lightGray `}
                type="text"
                placeholder="Search Name"
                onFocus={() => setActive(true)}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        refetch()
                    }
                }}
            />
            {active && <div className="text-white mx-4 cursor-pointer hover:bg-gray p-1 rounded-full  " onClick={() => {
                setKeyword('')
                setActive(false)
            }}>
                <RxCross2 />
            </div>}
            <div className="bg-green cursor-pointer text-black  text-2xl p-2 rounded-full mr-2 hover:bg-sgreen " onClick={() => {
                refetch()
            }} >
                <AiOutlineSearch />
            </div>
        </div>
    )
}

export default SearchBox