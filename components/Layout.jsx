import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='d-flex flex-column min-vh-100'>
        {children}
    </div>
  )
}
export default Layout;