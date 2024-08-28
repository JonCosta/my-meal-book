import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton: React.FC = () => {
    return (
        <Link to="/" className="px-2 py-1 text-white bg-primary rounded-full text-center inline-flex items-center mb-5">
            <ArrowLeftIcon className="size-4 mr-1 font-bold" />
            <span>Back to Home</span>
        </Link>
    )
}

export default HomeButton;