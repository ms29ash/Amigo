import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function SearchBox({ setKeyword, refetch, keyword, setActive }) {
  return (
    <div className="flex w-full items-center px-4">
      <div className="bg-lightGray w-full pl-2  py-2 rounded-full flex items-center ">
        <input
          className={`bg-lightGray outline-none pl-2 w-full border-2 border-lightGray `}
          type="text"
          placeholder="Search Name"
          value={keyword}
          onFocus={() => setActive(true)}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setActive(false);
              refetch();
            }
          }}
        />

        <div
          className="text-white mx-4 cursor-pointer hover:bg-gray p-1 rounded-full  "
          onClick={() => {
            setActive(true);
            setKeyword("");
          }}
        >
          <RxCross2 />
        </div>
        <div
          className="bg-green cursor-pointer text-black  text-2xl p-2 rounded-full mr-2 hover:bg-sgreen "
          onClick={() => {
            setActive(false);
            refetch();
          }}
        >
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
