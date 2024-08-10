import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='h-screen gird grid-cols-2 w-full'>
            <div className='relative bg-red-400'>
                {/* <Sidebar />1 */}
            </div>
            <div className='bg-yellow-300'>
                {<Outlet />}
            </div>
        </div>
    )
}

export default Layout