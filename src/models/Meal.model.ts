import Ingredient from "./Ingredient";

class Meal {
    id: number;
    name: string;
    urlThumbnail: string;
    area: string;
    category: string;
    instructions: string;
    source: string;
    youtubeLink: string;
    ingredients: Ingredient[];

    constructor(meal?: any) {
        this.id = 0;
        this.name = '';
        this.urlThumbnail = '';
        this.area = '';
        this.category = '';
        this.instructions = '';
        this.source = '';
        this.youtubeLink = '';
        this.ingredients = [];

        if (meal) {
            this.id = meal.id;
            this.name = meal.name;
            this.urlThumbnail = meal.urlThumbnail;
            this.area = meal.area;
            this.category = meal.category;
            this.instructions = meal.instructions;
            this.source = meal.source;
            this.youtubeLink = meal.youtubeLink;
            this.ingredients = meal.ingredients;
        }
    }

}

export default Meal;