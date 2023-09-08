
import { Product } from "../../models/products";
import ProductCard from "./ProductCard";
import {
    List} from "@mui/material";
interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) {
    return (
        <List>
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
        </List>
    );
}
