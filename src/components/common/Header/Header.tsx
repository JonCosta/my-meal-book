import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <nav className="bg-primary text-white p-4">

            <div className="flex flex-col md:flex-row md:justify-between items-center text-sm">
                <a href='/' className="order-2 md:order-1 mt-8 md:mt-0 font-title">
                    My Meal Book
                </a>

                <div className="order-1 md:order-2">
                    <a className="px-2" href='/about'>
                        About
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header;