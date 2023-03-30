import React, { useCallback, useState } from 'react'
import Cards from './Cards'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Main = () => {
    const [searchText, setSearchText] = useState("");
    const handleChange = (e) => {
        setSearchText(e.target.value);
    };
    const handleClick = () => {
        const inputValue = searchText;
    };
    return (
        <div className='bg-dark w-10/12 h-screen relative'>
                <div className="title text-4xl text-light font-semibold flex justify-center mt-24">
                    CatGPT
                </div>
                <div className="card flex justify-center">
                    <Cards />
                </div>
                <div className='flex flex-wrap justify-center w-full absolute bottom-10'>
                    <input type="text" id="search" value={searchText} onChange={handleChange} placeholder='Send a message...' className='w-7/12 rounded-md p-3 bg-response-gray shadow text-light focus:outline-none' />
                    <div className='m-1 p-2 -translate-x-10 -translate-y-1 text-white' onClick={handleClick}>
                        <SendOutlinedIcon className='-rotate-45' fontSize='small' />
                    </div>      
                </div>
        </div>
    )
}

export default Main