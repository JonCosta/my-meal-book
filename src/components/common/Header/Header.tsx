import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <nav className="bg-primary text-white p-4">

            <div className="flex flex-row justify-between items-center">
                <a href='/' className="text-lg font-title">
                    My Meal Book
                </a>

                <div>
                    <a className="text-sm font-bold" href='/about'>
                        About
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header;