import React from 'react'
import { UserState } from '../../context/UserProvider';
import { useMutation } from '@tanstack/react-query';
import axios from '../../axios';


function SearchUser({ data }) {
    const { user } = UserState()
    const headers = {
        'Authorization': `Bearer ${user.token}`
    };

    //mutation
    const { status, mutate } = useMutation({
        mutationFn: (chat) => {
            return axios.post('/chat', chat, { headers })
        },
    })

    const onChatHandler = () => {
        let newData = {
            userId: data._id, chatName: data.name
        }
        mutate(newData, {
            onSuccess: (data) => {
                console.log(data);
            }, onError: (error) => {
                console.log(error);
            },
        })
    }
    return (
        <div className="flex cursor-pointer hover:text-black px-4 py-3 hover:bg-green  items-center group w-full relative  max-w-full " onClick={onChatHandler}>
            <img
                className=" mr-3 w-[60px] h-[60px] rounded-full "
                src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
                alt=""
            />

            <div className=" relative w-[70%] flex flex-row items-center ">
                <div className="  flex  w-[70%]    flex-col  justify-between overflow-x-hidden ">
                    <h2 className="font-bold text-xl whitespace-nowrap capitalize ">
                        {data?.name}
                    </h2>
                </div>

            </div>
        </div >
    )
}

export default SearchUser