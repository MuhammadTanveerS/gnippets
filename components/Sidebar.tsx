import React, { useState } from 'react'
import Disover from './Disover';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className='bg-blackBgLight h-[50vh] w-96 rounded-2xl '>
      <div className='block m-2 ml-4 mt-3 text-xl'>
          YO!!!
      </div>
      <Disover />
    </div>
  )
}

export default Sidebar