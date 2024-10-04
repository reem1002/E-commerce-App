import ProductCard from "./ProductCard"
import { useEffect, useState } from 'react';

export default function Main() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const api_url = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const getProducts = () => {
        fetch(api_url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    const getCatProducts = (cat) => {
        fetch(`${api_url}/category/${cat}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    useEffect(() => {
        getProducts();
    }, [])
    const handleOnClick = (cat) => {
        setActiveCategory(cat);
        if (cat === "all") {
            getProducts();
        } else {
            getCatProducts(cat);
        }
    }
    return (


        <section className="products container section" id="vsec">
            <section className="products container section" id="vsec">
                <div className="tab__btns">
                    <span key="all" onClick={() => handleOnClick("all")} className={`tab__btn ${activeCategory === "all" ? "active-tab" : ""}`}>All Products</span>
                    {categories.map((cat) => (
                        <span key={cat} onClick={() => handleOnClick(cat)} className={`tab__btn ${activeCategory === cat ? "active-tab" : ""}`}>{cat}</span>
                    ))}
                </div>
            </section>

            <div className="products__container grid" id="prods__all">


                {products.map((product) =>
                    <ProductCard key={product._id} product={product} />
                )}

            </div>


        </section>


    )
}