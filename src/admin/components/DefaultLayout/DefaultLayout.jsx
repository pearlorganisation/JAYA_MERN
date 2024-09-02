import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import AdminSideBar from '../../../components/Sidebar/AdminSideBar'

const DefaultLayout = () => {
  return (
    <div className='grid lg:grid-cols-[18rem_auto]'>
      <div className='relative '>
        <AdminSideBar />
      </div>
      <div className=''>
        {<Outlet />}
      </div>
    </div>
  )
}

export default DefaultLayout