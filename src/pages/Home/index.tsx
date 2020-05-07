import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import axios from 'axios';
import api from '../../services/api';

import {
  Container,
  Title,
  SubTitle,
  SearchBar,
  SearchBarText,
  CartPokemon,
  CartPokemonText,
} from './styles';

interface Pokemon {
  id: number;
  name: string;
  types: [];
  sprites: {
    front_default: string;
  };
}

interface Response {
  data: Pokemon;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      // Fazendo uma requisição e obtendo uma lista de pokémons
      const { data } = await api.get('/pokemon');

      // Vamos percorrer por essa lista, fazendo uma requisição para cade pokémon
      const requests = data.results.map((pokemon: { name: string }) =>
        api.get(`/pokemon/${pokemon.name}`),
      );

      // Esperamos a resposta da requisição
      const pokemonsInfoResponse = await axios.all(requests);

      // Vamos percorrer cada uma das respostas
      const pokemonsInfo = pokemonsInfoResponse.map((response) => {
        // Vamos pegar as informações do pokémon, e colocar no state
        const { id, name, types, sprites } = response.data;

        const pokemon = {
          id,
          name,
          types,
          sprites,
        };

        return pokemon;
      });

      setPokemons(pokemonsInfo);
    }

    loadPokemons();
  }, []);

  return (
    <Container>
      <Title>Pokédex</Title>
      <SubTitle>
        Search for Pokémon by name or using the National Pokédex number.
      </SubTitle>
      <SearchBar>
        <Icon name="search" size={20} color="#747476" />
        <SearchBarText placeholder="What pokémon are you looking for?"></SearchBarText>
      </SearchBar>

      {pokemons &&
        pokemons.map((pokemon) => (
          <CartPokemon key={pokemon.id}>
            <CartPokemonText>{pokemon.name}</CartPokemonText>
            <CartPokemonText>{pokemon.id}</CartPokemonText>
          </CartPokemon>
        ))}
    </Container>
  );
};

export default Home;
