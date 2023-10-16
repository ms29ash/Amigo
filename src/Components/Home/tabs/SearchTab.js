import React from "react";
import SearchUser from "../SearchUser";
import SearchBox from "../SearchBox";
import axios from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { UserState } from "../../../context/UserProvider";

function SearchTab() {
  const [keyword, setKeyword] = useState("");
  const { user, tab, setTab } = UserState();
  const [active, setActive] = useState(false);
  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  //Search Chatss
  const searchChats = () =>
    axios.get("/user/search", {
      params: {
        search: keyword,
      },
      headers: headers,
    });

  const { data, refetch, isSuccess, isError } = useQuery({
    queryKey: ["searchedChats"],
    queryFn: searchChats,
    enabled: false,
  });

  return (
    <div>
      <SearchBox
        setActive={setActive}
        refetch={refetch}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <div className=" py-4">
        {!isSuccess && keyword === "" && !isError && (
          <p className="text-center">Search to show results</p>
        )}
        {isSuccess && data?.data.length === 0 && (
          <p className="text-center">Not Found</p>
        )}
        {isSuccess && !active && keyword !== "" && data?.data.length > 0 && (
          <p className="px-6 opacity-80">{`You Searched ${keyword} `}</p>
        )}
      </div>
      <div className="overflow-y-auto overflow-x-hidden h-full max-h-screen w-full pb-48  ">
        {data?.data &&
          data?.data.map((user) => (
            <SearchUser key={user._id} data={user} setKeyword={setKeyword} />
          ))}
      </div>
    </div>
  );
}

export default SearchTab;
