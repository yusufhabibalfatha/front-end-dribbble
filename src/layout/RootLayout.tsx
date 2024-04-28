import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main className="bg-slate-300 text-black">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
