import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { generateMeow } from '../utils/meowGenerator';

const Sidebar = () => {
  return (
    <div className='w-2/12 bg-extra-dark h-screen'>
        <div className="w-full flex justify-center">
            <div className="new w-11/12 border rounded-md border-response-gray m-2 p-2.5 text-light cursor-pointer hover:bg-hover-gray duration-150">
                <span><AddIcon fontSize='small' /></span><span className='pl-2 text-sm'>New chat</span>
            </div>
        </div>
        <div className="w-full flex flex-col text-light ml-4 mt-1 h-fit">
            <div className='w-11/12 p-2 hover:bg-hover-gray rounded-md font-thin'>
                <ChatBubbleOutlineIcon fontSize='small' />
                <span className='pl-3'>{generateMeow(5)}</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar