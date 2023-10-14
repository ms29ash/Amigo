import React from 'react'
import SearchUser from './SearchUser';

function SearchResults({ data, error, isSuccess, setActive, setKeyword }) {
    return (
        <>
            {
                !isSuccess ? (data?.data && data.data.length === 0 ? (
                    <div className="grid place-items-center">Not Found</div>
                ) : (
                    data?.data.map((user) => <SearchUser key={user._id} data={user} setKeyword={setKeyword} setActive={setActive} />)
                )) : (
                    <div className="grid place-items-center">Search to get results</div>
                )
            }

        </>
    )
}

export default SearchResults