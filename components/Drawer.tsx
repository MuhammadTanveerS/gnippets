import React from 'react'
import {AiFillFire} from 'react-icons/ai'

const Drawer = () => {
  return (
    <div className='flex flex-col'>
        <div className='m-4 mt-10 bg-pinkBg p-3 rounded-full cursor-pointer
        hover:bg-pinkBgDark transition ease-in delay-150'>
            <AiFillFire color="white" fontSize="2.0rem"/>
        </div>
        
    </div>
  )
}

export default Drawer