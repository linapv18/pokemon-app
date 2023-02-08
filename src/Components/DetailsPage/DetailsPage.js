import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import getBgColor from "../utils/getBgColor";
import { MdCatchingPokemon } from "react-icons/md";
import { FaRulerVertical, FaWeightHanging } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const DetailsPage = ({url}) => {
  const { pokemonId } = useParams();

  const pokemon = useQuery({
    queryKey:[pokemonId], 
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then((response) => response.json())
  })

  if (pokemon.isLoading) return <h1>Loading...</h1>;
  if (pokemon.isError)
    return <pre>{JSON.stringify(pokemon.error)}</pre>;

  return (
    <div style={{ backgroundColor: getBgColor(pokemon.data.types[0].type.name) }}>
      <div className="top">
        <div className="top__text">
          <div className="top__nameContainer">
            <Link to={"/"} className="top__arrow">
              <AiOutlineArrowLeft />
            </Link>
            <div className="top__pokemonName">{pokemon.data.name}</div>
          </div>
          <div className="top__pokemonId">
            #{pokemon.data.id.toString().padStart(3, "0")}
          </div>
        </div>
        <MdCatchingPokemon className="top__icon" />
        <img
          className="top__image"
          src={pokemon.data.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </div>
      <div className="info">
        <div className="types__container">
          {pokemon.data.types.map((type) => (
            <div
              className="types"
              style={{ backgroundColor: getBgColor(type.type.name) }}
              key={type.slot}
            >
              {type.type.name}
            </div>
          ))}
        </div>
        <div className="about">
          <div
            className="about__title"
            style={{ color: getBgColor(pokemon.data.types[0].type.name) }}
          >
            About
          </div>
          <div className="about__container">
            <div className="about__item">
              <div className="about__results">
                <FaWeightHanging /> {Math.round(pokemon.data.weight) / 10} kg
              </div>
              <div className="about__description">Weight</div>
            </div>
            <div className="about__item">
              <div className="about__results">
                <FaRulerVertical /> {Math.round(pokemon.data.height) / 10} m
              </div>
              <div className="about__description">Height</div>
            </div>
            <div className="about__item">
              <div className="about__results">
                <div>
                  {pokemon.data.abilities.map((ability) => (
                    <div key={ability.slot}>{ability.ability.name}</div>
                  ))}
                </div>
              </div>
              <div className="about__description">Moves</div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div
            className="stats__title"
            style={{ color: getBgColor(pokemon.data.types[0].type.name) }}
          >
            Base Stats
          </div>
          <div className="stats__container">
            <div className="stats__data">
              <div
                className="stats__names"
                style={{ color: getBgColor(pokemon.data.types[0].type.name) }}
              >
                <div>hp</div>
                <div>atk</div>
                <div>def</div>
                <div>satk</div>
                <div>sdef</div>
                <div>spd</div>
              </div>
              <div className="stats__values">
                {pokemon.data.stats.map((stat) => (
                  <div className="stats__bars">
                    <div>{stat.base_stat.toString().padStart(3, "0")}</div>
                    <div
                      className="stats__barContainer"
                      style={{
                        backgroundColor: getBgColor(
                          pokemon.data.types[0].type.name,
                          0.2
                        ),
                      }}
                    >
                      <div
                        className="stats__bar"
                        style={{
                          width: `${(stat.base_stat / 255) * 100}%`,
                          backgroundColor: getBgColor(
                            pokemon.data.types[0].type.name
                          ),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
