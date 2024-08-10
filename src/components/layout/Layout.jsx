import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='grid lg:grid-cols-[18rem_auto]'>
            <div className='relative '>
                <Sidebar />
            </div>
            <div className=''>
                {<Outlet />}
            </div>
        </div>
    )
}

export default Layout