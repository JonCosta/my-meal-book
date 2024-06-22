import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/');
    }

    const handleClickAbout = () => {
        navigate('/about');
    }

    return (
        <nav className="bg-primary text-white p-4">

            <div className="flex flex-row justify-between items-center">
                <span className="text-lg font-title cursor-pointer" onClick={handleClickLogo}>
                    My Meal Book
                </span>

                <span className="text-sm font-bold cursor-pointer" onClick={handleClickAbout}>
                    About
                </span>
            </div>
        </nav>
    )
}

export default Header;