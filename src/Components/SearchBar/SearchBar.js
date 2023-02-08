import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__container">
        <div className="searchbar__icon">
          <AiOutlineSearch />
        </div>
        <input className="searchbar__input" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
