import React from "react"
import "./style.css"


function Search(props){
    return(
        <div className="searchInput">
            <form id="searchForm">
            <input placeholder="Let's find some books!..."></input>
            </form>
            <button id="SearchBtn"></button>
        </div>

    )
}
export default Search;