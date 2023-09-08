import { useEffect, useState } from "react";
import { Product } from "./models/products";
//jhsdb
function App() {
    const [products, setData] = useState<Product[]>([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);
    return (
        <div>
            <h1>Re-Store</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.Id}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
