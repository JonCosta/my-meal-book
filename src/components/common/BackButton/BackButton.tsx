import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (event: any) => {
        event.preventDefault();
        navigate(-1);
    }

    return (
        <Link to={'..'} onClick={handleClick}
            className="text-white text-center inline-flex items-center mb-5
                font-semibold border-2 border-white rounded-full px-2 py-1
                hover:bg-white hover:text-black">
            <ArrowLeftIcon className="size-4 mr-1" />
            <span>Back</span>
        </Link>
    )
}

export default BackButton;