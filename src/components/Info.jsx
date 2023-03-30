import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { generateMeow } from '../utils/meowGenerator';

const Info = ({ heading }) => {
  return (
    <div className='flex flex-col mt-20 p-2 items-center'>
        <div className='icon text-light p-1'>
            <PetsIcon fontSize="large" />
        </div>
        <div className="heading text-light text-lg">{heading}</div>
        <div className="content">
            <div className="feature flex bg-response-gray rounded-md m-2 px-4 py-2 justify-center text-light text-sm w-60 text-center hover:bg-extra-dark cursor-pointer">
                {generateMeow()}
            </div>
            <div className="feature flex bg-response-gray rounded-md m-2 px-4 py-2 justify-center text-light text-sm w-60 text-center hover:bg-extra-dark cursor-pointer">
                {generateMeow()}
            </div>
            <div className="feature flex bg-response-gray rounded-md m-2 px-4 py-2 justify-center text-light text-sm w-60 text-center hover:bg-extra-dark cursor-pointer">
                {generateMeow()}
            </div>
        </div>
    </div>
  )
}

export default Info