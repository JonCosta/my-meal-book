import { ArrowPathIcon } from "@heroicons/react/16/solid";


type LoadingLabelProps = {
    labelText?: string;
}

const LoadingLabel: React.FC<LoadingLabelProps> = ({ labelText = 'Loading...' }) => {

    return (
        <div className="flex flex-row justify-center items-center text-center text-lg text-white font-title">
            <ArrowPathIcon className="size-6 animate-spin" />
            <p className="text-white">
                {labelText}
            </p>
        </div>
    )
}

export default LoadingLabel;