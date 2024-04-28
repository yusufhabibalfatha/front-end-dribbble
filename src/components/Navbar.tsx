import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-around bg-black py-4 text-white">
            <div>
                <h1>Navigation</h1>
            </div>
            <div className="flex w-1/4 justify-around text-blue-400 underline">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/page1">Page 1</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
