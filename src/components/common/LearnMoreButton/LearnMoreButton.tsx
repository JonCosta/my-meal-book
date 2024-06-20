type LearnButtonProps = {
    sourceLink: string;
    buttonText?: string;
}

const LearnMoreButton: React.FC<LearnButtonProps> = ({
    sourceLink,
    buttonText = "Learn More"
}) => {
    return (
        <a className="px-3 py-1 text-white bg-primary rounded-full text-center inline-flex items-center"
            href={sourceLink} target="_blank" >
            {buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

        </a>
    )
}

export default LearnMoreButton;