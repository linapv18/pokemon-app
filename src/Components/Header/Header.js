import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { MdCatchingPokemon } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title__container">
        <MdCatchingPokemon className="header__icon" />
        <p className="header__title">Pokédex</p>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
