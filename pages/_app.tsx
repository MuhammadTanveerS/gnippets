import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';

import Drawer from '../components/Drawer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SuggestedUsers from '../components/SuggestedUsers';

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  },[])

  if(isSSR) return null;

  return( 
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <div  className='bg-blackBg text-white'>
        <Navbar/>
        <div className='flex gap-6 md:gap-20'>
          <div>
            <Drawer />
          </div>
          <div className='mt-4 flex flex-col gap-0  h-[88vh] videos flex-1'>
            <Component {...pageProps} />
          </div>
          <div className='overflow-hidden xl:overflow-auto'>
            <Sidebar/>
          </div>
          <div>
            <SuggestedUsers />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default MyApp
