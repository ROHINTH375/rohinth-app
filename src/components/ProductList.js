import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const ProductList = ({addToCart, cartItems}) => {


    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product = {product}
                    addToCart = {addToCart}
                    cartItems = {cartItems}
                />
            ))}
        </div>
    )
}
export default ProductList