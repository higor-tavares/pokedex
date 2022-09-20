import React from "react";
import "./Search.css"
const Search = () => {
    return (
        <form className="search-bar">
            <input type="text" placeholder="Put the pokemon name here..."/>
            <button>Search</button>
        </form>
    )
}
export default Search