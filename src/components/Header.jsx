import logo from '../assets/logo.png'
import dollar from '../assets/dollar.png'
const header = ({addMoney}) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img src={logo} alt="" className='w-[70px] h-[60px]' />
            </div>

            {/* right menu */}
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 hidden lg:flex me-8">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
                <div className='flex items-center border p-2 rounded-md'>
                    <p> {addMoney} Coin </p>
                    <img src={dollar} alt="" className='ms-1 w-[20px] h-[20px]' />
                </div>

            </div>
        </div>
    );
};

export default header;