import { ArrowRightIcon } from "@heroicons/react/16/solid";

type LearnButtonProps = {
    sourceLink: string;
    buttonText?: string;
}

const LearnMoreButton: React.FC<LearnButtonProps> = ({
    sourceLink,
    buttonText = "Learn More"
}) => {
    return (
        <a className="px-2 py-1 text-white bg-primary rounded-full text-center inline-flex items-center"
            href={sourceLink} target="_blank" rel="noreferrer">
            {buttonText}
            <ArrowRightIcon className="size-4 ml-1" />
        </a>
    )
}

export default LearnMoreButton;