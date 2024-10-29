import React from 'react'
import Sidebar from '../../components/sidebar/index'
// import InfoBar from '@/components/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      {/* <Sidebar /> */}
      <Sidebar/>
      <div className="w-full">
        {/* <InfoBar /> */}
        {props.children}
      </div>
    </div>
  )
}

export default Layout