import Ingredient from "../models/Ingredient";
import Meal from "../models/Meal.model";

export function isStringEmpty(str: string): boolean {
    return (str === null) || (str.trim().length === 0);
}

export function sortElementListByName(elementList: any[]) {
    elementList = elementList.sort((elementA, elementB) => {
        return elementA.name.localeCompare(elementB.name);
    });
    return elementList;
}

export const createMealFromMealApiObject = (mealApiObject: any): Meal => {
    let meal = new Meal();
    for (const key in mealApiObject) {
        if (Object.prototype.hasOwnProperty.call(mealApiObject, key)) {
            const mealProperty = mealApiObject[key];
            switch (key) {
                case "idMeal":
                    meal.id = mealProperty;
                    break;

                case "strMeal":
                    meal.name = mealProperty;
                    break;

                case "strArea":
                    meal.area = mealProperty;
                    break;

                case "strCategory":
                    meal.category = mealProperty;
                    break;

                case "strMealThumb":
                    meal.urlThumbnail = mealProperty;
                    break;

                case "strInstructions":
                    meal.instructions = mealProperty;
                    break;

                case "strSource":
                    meal.source = mealProperty;
                    break;

                case "strYoutube":
                    meal.youtubeLink = formatYoutubeLink(mealProperty);
                    break;

                default:
                    break;
            }
        }
    }

    meal.ingredients = createIngredientListFromMealApiObject(mealApiObject);
    return meal;
}

const createIngredientListFromMealApiObject = (mealFromApi: any): Ingredient[] => {
    let ingredientList: Ingredient[] = [];
    for (let index = 1; index <= 20; index++) {
        let ingredientKey = "strIngredient" + index;
        if (Object.prototype.hasOwnProperty.call(mealFromApi, ingredientKey)) {
            const ingredientAtIndex = mealFromApi["strIngredient" + index];
            const measureAtIndex = mealFromApi["strMeasure" + index];

            if (!isStringEmpty(ingredientAtIndex)) {
                let ingredient = new Ingredient(ingredientAtIndex, measureAtIndex);
                ingredientList.push(ingredient);
            }
        }
    }
    return ingredientList;
}

const formatYoutubeLink = (youtubeLink: string) => {
    return youtubeLink.replaceAll("watch?v=", "embed/");
}