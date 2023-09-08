import { Fragment, useEffect, useState } from "react";
import { Product } from "./models/products";
import Catalog from "./components/catalog/Catalog";
import { Typography } from "@mui/material";
//jhsdb
function App() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, []);

    function addProduct() {
        setProducts((prev) => [
            ...prev,
            {
                id: prev.length + 101,
                name: "product" + (prev.length + 1),
                price: prev.length * 100 + 100,
                brand: "some brand",
                description: "some des",
                pictureUrl: "gvgfg",
            },
        ]);
    }
    console.log("from parent");
    return (
        <Fragment>
            <Typography variant="h1">Re-Store</Typography>
            <Catalog products={products} addProduct={addProduct} />
        </Fragment>
    );
}

export default App;
