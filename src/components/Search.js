import React, { useEffect, useState } from "react";
import axios from 'axios'
export default function SearchBar(){
    const [searchInput , setSearchInput] = useState(``)
    const [searched, setSearched] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(res => setSearched(res.data)).catch(err => console.log(err))
    })
    const searchFunction = (e , x) =>{
        e.preventDefault()
        searched.map(el => {
            if(el.title === x || el.price === +(x))
            {
                console.log(el)
            }
        })
    }
    return(<form id="search-form">
        <div className="header__search">
            <input value={searchInput} onChange={e => setSearchInput(e.target.value)} type="text" placeholder="Search for items..." className="form__input" id="search-field" name="searchTerm"/>
            <button onClick={(e)=> searchFunction(e , searchInput)} type="submit" className="search__btn">
            <img src=".\Assets\images\Search 1.png" alt=""/>
            </button>
        </div>
    </form>);
}