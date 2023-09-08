export interface Product {
    Id: number;
    name: string;
    Description: string;
    price: number;
    PictureUrl: string;
    Brand: string;
    Type?: string;
    QuantityInStock?: number;
}
