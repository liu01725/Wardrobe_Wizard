import React from "react";
import {RiSearchLine} from 'react-icons/ri'
function onClick() {
  window.location.href = "./Results";
}

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <button className="search-image" onClick={onClick}><RiSearchLine/></button>
    </div>
  );
};

export default SearchBar;