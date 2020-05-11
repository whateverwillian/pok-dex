import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native'; // TEMPORÁRIO

import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import {
  Container,
  Title,
  SubTitle,
  SearchBar,
  SearchBarText,
  CartPokemon,
  CartPokemonTextId,
  CartPokemonTextName,
  CartPokemonTextType,
  PokemonTypes,
  PokemonImage,
  PokemonInfo,
} from './styles';

interface Pokemon {
  id: string;
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
}

interface PokemonType {
  type: {
    name: string;
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
      const { data } = await api.get('/pokemon?limit=964');

      // Vamos percorrer por essa lista, fazendo uma requisição para cade pokémon
      const requests = data.results.map((pokemon: { name: string }) =>
        api.get(`/pokemon/${pokemon.name}`),
      );

      // Esperamos a resposta da requisição
      const pokemonsInfoResponse: Response[] = await axios.all(requests);

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

      <FlatList
      data={pokemons}
      keyExtractor={item => item.id}
      ListFooterComponent={<View />}
      renderItem={({ item: pokemon }) => (
        <CartPokemon types={pokemon.types}>
          <PokemonInfo>
            <CartPokemonTextId>
              #{formatValue(Number(pokemon.id))}
            </CartPokemonTextId>
            <CartPokemonTextName>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </CartPokemonTextName>

            <PokemonTypes>
              {pokemon.types.map((types) => (
                <CartPokemonTextType type={types.type.name}>
                  {types.type.name}
                </CartPokemonTextType>
              ))}
            </PokemonTypes>
          </PokemonInfo>
          <PokemonImage
            source={{
              uri:
                `https://assets.pokemon.com/assets/cms2/img/pokedex/full/` +
                `${formatValue(Number(pokemon.id))}.png`,
            }}
          />
        </CartPokemon>
      )} />

    </Container>
  );
};

export default Home;
