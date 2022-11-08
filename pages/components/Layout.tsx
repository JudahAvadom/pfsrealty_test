import React, { ReactNode } from 'react'
import HeadPage from './HeadPage'

type LayoutType = {
    children: ReactNode
}

const Layout = ({children} : LayoutType) => {
  return (
    <div>
        <HeadPage />
        {children}
    </div>
  )
}

export default Layout