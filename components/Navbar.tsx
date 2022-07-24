import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoogleLogin,googleLogout } from '@react-oauth/google'

import Logo from '../utils/logo.png'

const Navbar = () => {
  const user = false;

  return (
    <div className='w-full flex justify-between items-center
    border-b-2 border-red-600 py-2 px-4'>
        <Link href='/'>
            <div className='w-[100px] md:w-[130px]'>
                <Image
                    className='cursor-pointer'
                    src={Logo}
                    alt="gnippets"
                    layout='responsive'
                />
            </div>
        </Link>
        <div>
          SEARCH
        </div>
        <div>
          {user ? (<div>
            <div>Logged In</div>
          </div>
          ): (
            <GoogleLogin 
              onSuccess={(res) => console.log(res)}
              onError={() => console.log("Error")}/>
          )}
        </div>
    </div>
  )
}

export default Navbar