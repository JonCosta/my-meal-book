import { isStringEmpty } from "../utils/StringUtils";

class Ingredient {
    name: string = '';
    measure: string = '';

    constructor(name: string, measure: string) {
        this.name = name;
        if (!isStringEmpty(measure)) {
            this.measure = measure;
        }
    }

}

export default Ingredient;