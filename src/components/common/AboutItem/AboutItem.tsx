import LearnMoreButton from "../LearnMoreButton/LearnMoreButton";

type AboutItemProps = {
    title: string;
    description: string;
    sourceUrl?: string;
    titleSize?: 'text-2xl' | 'text-4xl';
}
const AboutItem: React.FC<AboutItemProps> = ({title, description, sourceUrl, titleSize = 'text-2xl'}) => {
    return (
        <div className="flex flex-col gap-3 items-start">
            <h1 className={`${titleSize} font-bold font-title text-white`}>
                {title}
            </h1>
            <p className="text-white">
                {description}
            </p>
            {sourceUrl &&
                <LearnMoreButton sourceLink={sourceUrl} />
            }
        </div>
    )
}

export default AboutItem;