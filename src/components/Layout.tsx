import React, { ReactNode } from 'react'
import HeadPage from './HeadPage'
import Navbar from './Navbar'

type LayoutType = {
    children: ReactNode
}

const Layout = ({children} : LayoutType) => {
  return (
    <div>
        <HeadPage />
        <Navbar />
        {children}
    </div>
  )
}

export default Layout