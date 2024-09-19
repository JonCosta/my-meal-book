import React from 'react';

const Title: React.FC<{ label: string }> = ({ label }) => {
    return (
        <>
            <h1 className="text-center text-3xl font-bold capitalize pb-3 font-title
                md:text-4xl lg:text-5xl">
                {label}
            </h1>
        </>
    )
}

export default Title;