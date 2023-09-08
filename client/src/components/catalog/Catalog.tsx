import { Fragment } from "react";
import { Product } from "../../models/products";
import ProductList from "./ProductList";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
    
    return (
        <Fragment>
          <ProductList products={products}/>
            <button className="btn" onClick={addProduct}>
                Add Product
            </button>
        </Fragment>
    );
}
