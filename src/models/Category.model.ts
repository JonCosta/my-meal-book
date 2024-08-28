class Category {
    id: number;
    name: string;
    description: string;
    urlThumbnail: string;

    constructor(category?: any) {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.urlThumbnail = '';

        if (category) {
            this.setPropertiesFromObject(category);
        }
    }

    private setPropertiesFromObject(category: any) {
        for (const key in category) {
            if (Object.prototype.hasOwnProperty.call(category, key)) {
                const categoryProperty = category[key];
                switch (key) {
                    case "idCategory":
                        this.id = categoryProperty;
                        break;
                    case "strCategory":
                        this.name = categoryProperty;
                        break;
                    case "strCategoryDescription":
                        this.description = categoryProperty;
                        break;
                    case "strCategoryThumb":
                        this.urlThumbnail = categoryProperty;
                        break;
                }
            }
        }
    }
}

export default Category;