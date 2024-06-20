class Ingredient {
    name: string = '';
    measure: string = '';

    constructor(name: string, measure?: string) {
        this.name = name;
        this.measure = measure || '';
    }

}

export default Ingredient;