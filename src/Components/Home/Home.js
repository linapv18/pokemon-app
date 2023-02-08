import { useQuery } from "@tanstack/react-query";
import React from "react";
import Header from "../Header/Header";
import PokemonCard from "../PokemonCard/PokemonCard";

const Home = () => {
  const pokemonList = useQuery({
    queryKey: ["pokemonList"],
    queryFn: () =>
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=24").then((response) =>
        response.json()
      ),
  });

  if (pokemonList.isLoading) return <h1>Loading...</h1>;
  if (pokemonList.isError)
    return <pre>{JSON.stringify(pokemonList.error)}</pre>;

    console.log(pokemonList);
  return (
    <div className="home">
      <Header />
      <div className="pokemoncard__container">
        {pokemonList.data.results.map(({ name, url }) => (
          <PokemonCard key={name} name={name} url={url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
