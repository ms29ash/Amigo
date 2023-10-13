import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import SearchBox from "./SearchBox";
import SingleChat from "./SingleChat";
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from "../../axios";
import { UserState } from "../../context/UserProvider";
import SearchResults from "./SearchResults";

function AllChats() {
    const { user } = UserState()
    const [active, setActive] = useState(false)
    const [keyword, setKeyword] = useState('')
    const headers = {
        'Authorization': `Bearer ${user.token}`
    };

    //Fetching Chats
    const fetchChats = () => axios.get('/chat/chats', { headers })

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['chats'],
        queryFn: fetchChats,
        // enabled: headers,
    })

    //Search Chatss
    const searchChats = () => axios.get('/user/search', {
        params: {
            search: keyword
        },
        headers: headers

    })

    const { data: chats, error: chatError, refetch } = useQuery({
        queryKey: ['searchedChats'],
        queryFn: searchChats,
        enabled: false,
    })



    return (
        <>
            <div className="flex-1 bg-gray h-screen overflow-y-hidden max-h-screen ">
                <div className="p-4">
                    <div className="flex justify-between items-center p-4 ">
                        <h1 className="text-2xl font-bold  ">Chats</h1>
                        <BsThreeDots className=" hover:bg-green  hover:text-black cursor-pointer rounded-full p-1 text-3xl" />
                    </div>

                    <SearchBox refetch={refetch} keyword={keyword} setKeyword={setKeyword} active={active} setActive={setActive} />
                </div>
                <div className="overflow-y-auto overflow-x-hidden h-full w-full pb-48  ">
                    {
                        active ? <SearchResults data={chats} error={chatError} /> :
                            <>
                                {data?.data?.chats
                                    .map((chat) => {
                                        return (
                                            <SingleChat key={chat._id} chat={chat} />
                                        );
                                    })}
                            </>
                    }
                </div>
            </div>
        </>
    );
}

export default AllChats;
