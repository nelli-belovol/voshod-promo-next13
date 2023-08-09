export interface Tag {
    categoryName: string;
    tags: string[];
}

export interface Car {
    id: number;
    name: string;
    image: string;
    price: number;
    tagCategories: Tag[];
}