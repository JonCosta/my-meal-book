import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton: React.FC = () => {
    return (
        <Link to="/" className="px-3 py-1 text-white bg-primary rounded-full text-center inline-flex items-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="size-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>

            <span>Back to Home</span>
        </Link>
    )
}

export default HomeButton;