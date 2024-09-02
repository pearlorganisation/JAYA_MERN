import Sidebar from '../Sidebar/Sidebar'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = () => {
    return (
        <div className='grid lg:grid-cols-[18rem_auto]'>
            <div className='relative '>
                <Sidebar />
            </div>
            <div className=''>
                <Header />
                {<Outlet />}
                <Footer />
            </div>
        </div>
    )
}

export default Layout