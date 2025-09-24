import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/Currency.png'

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-[1280px] mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <img className='w-[60px] h-[60px]' src={navImg} alt="" />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex items-center">
                    <li><a>Home</a></li>
                    <li><a>Fixtures</a></li>
                    <li><a>Team</a></li>
                    <li><a>Schedule</a></li>
                    <li>
                        <button className="btn border-gray-300">
                            <span>{availableBalance}</span>
                            <span>Coin</span>
                            <img src={dollarImg} alt="" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;