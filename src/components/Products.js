import { useEffect, useState } from "react"

export default function Products(){
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    },[])
    return(
        <section className="products container section" id="vsec">
            <div className="tab__btns">
            <span key="all" className="tab__btn active-tab">All Products</span>
                {categories.map((cat)=>(
                    <span key={cat} onClick={(cat)=>getProducts(cat)} className="tab__btn">{cat}</span>
                ))}
            </div>
        </section>
    )
}

function getProducts(){
    
}