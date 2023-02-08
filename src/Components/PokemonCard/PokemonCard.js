import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
  const pokemon = useQuery({
    queryKey: [url],
    queryFn: () => fetch(url).then((response) => response.json()),
  });
  const navigate = useNavigate();

  if (pokemon.isLoading) return <h1>Loading...</h1>;
  if (pokemon.isError)
    return <pre>{JSON.stringify(pokemon.error)}</pre>;

  return (
    <div
      className="pokemoncard"
      onClick={() => navigate(`/${pokemon.data.id}`)}
    >
      <div className="pokemoncard__id">
        #{pokemon.data.id.toString().padStart(3, "0")}
      </div>
      <img
        className="pokemoncard__image"
        src={pokemon.data.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <div className="pokemoncard__name">{name}</div>
    </div>
  );
};

export default PokemonCard;
