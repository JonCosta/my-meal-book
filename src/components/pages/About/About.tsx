import AboutItem from "../../common/AboutItem/AboutItem";
import BackButton from "../../common/BackButton/BackButton";

const AboutPage: React.FC = () => {

    return (
        <>
            <BackButton />
            <div className="flex flex-col gap-8">

                <AboutItem
                    title="What is My Meal Book?"
                    description="My Meal Book is a small project created with the purposes of learning and practicing the basic concepts of React. It was created using the following tools:"
                    titleSize="text-4xl"
                />

                <AboutItem
                    title="React"
                    description="A JavaScript library used to create web and native user interfaces."
                    sourceUrl="https://react.dev"
                />

                <AboutItem
                    title="Tailwind CSS"
                    description="A utility-first CSS framework for rapid UI development."
                    sourceUrl="https://tailwindcss.com/"
                />

                <AboutItem
                    title="TheMealDB"
                    description="An open, crowd-sourced database of Recipes from around the world."
                    sourceUrl="https://www.themealdb.com/api.php"
                />
                <AboutItem
                    title="TheMealDB"
                    description="An open, crowd-sourced database of Recipes from around the world."
                    sourceUrl="https://www.themealdb.com/api.php"
                />
                <div>
                    Background photo by <a className='underline hover:no-underline' target="_blank" rel="noreferrer"
                        href="https://unsplash.com/pt-br/@rumanamin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rumman Amin</a>
                    &nbsp;on <a className='underline hover:no-underline' target="_blank" rel="noreferrer"
                        href="https://unsplash.com/pt-br/fotografias/alimentos-do-tipo-variado-nKs-oXRGGEg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </div>
        </>
    );
}

export default AboutPage;