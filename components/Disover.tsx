import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { topics } from '../utils/constants'

const Disover = () => {
    const router = useRouter();
    const { topic } = router.query;

    const activeTopicStyle = 'xl:border-2 hover:bg-black xl:border-pinkBg px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-pinkBg';
    const topicStyle = 'xl:border-2 hover:bg-pinkBg xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-white';

  return (
    <div>
        <p className='text-gray-500 font-semibold m-3 mt-4'>
            Popular Categories
        </p>
        <div className='flex gap-3 flex-wrap'>
            {topics.map((item) => (
                <Link href={`/?topic=${item.name}`} key={item.name}> 
                    <div className={topic === item.name ? activeTopicStyle : topicStyle}>
                        <span className='font-bold text-2xl xl:text-md'>
                            {item.icon}
                        </span>
                        <span className='font-medium text-md capitalize'>
                            {item.name}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Disover