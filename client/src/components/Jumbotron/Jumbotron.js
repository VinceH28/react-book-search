import React from "react";
import SearchBar from "../SearchBar"
import Search from "../Search"
import "./style.css";

function Jumbotron() {
  return (
    <div className="container jumboCards">

    <div className="container img-fluid jumbotronContainer container-fluid">
      <div>
        
        <SearchBar />
        <br></br>
        <Search/>
        
      </div>
      </div>
    </div>
  );
}
export default Jumbotron;