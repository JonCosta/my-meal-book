import AboutItem from "../../common/AboutItem/AboutItem";

const AboutPage: React.FC = () => {

    return (
        <div className="center-container">
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
            </div>
        </div>
    );
}

export default AboutPage;