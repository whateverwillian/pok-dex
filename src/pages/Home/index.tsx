import React, { useState, useEffect } from 'react';
import { FlatList, View, Image } from 'react-native'; // TEMPORÁRIO
import AsyncStorage from '@react-native-community/async-storage';

import axios from 'axios';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';

import formatValue from '../../utils/formatValue';
import formatPokemonName from '../../utils/formatPokemonName';

import { Pokemon, Response } from './styles/types';

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

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {

      // Temos duas opções aqui ->
      // A) Já temos os dados salvos no Async Storage
      // B) Não temos os dados, vamos ter que buscar, e dai colocamos no AsyncStorage
      const alreadyHavePokemonsOnAsyncStorage = await AsyncStorage.getItem('@pokemons')

      if (alreadyHavePokemonsOnAsyncStorage) {
        setPokemons(JSON.parse(alreadyHavePokemonsOnAsyncStorage));
      } else {
        // Fazendo uma requisição e obtendo uma lista de pokémons
        const { data } = await api.get('/pokemon?limit=964');

        // Vamos percorrer por essa lista, fazendo uma requisição para cada pokémon
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
        await AsyncStorage.setItem('@pokemons', JSON.stringify(pokemonsInfo));
      }
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
        <SearchBarText onChange={() => {}}
        placeholder="What pokémon are you looking for?"
        ></SearchBarText>
      </SearchBar>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={item => item.id.toString() } // O id vem como number
        ListFooterComponent={<View />}
        renderItem={({ item: pokemon }) => (
          <CartPokemon types={pokemon.types}>
            <PokemonInfo>
              <CartPokemonTextId>
                #{formatValue(pokemon.id)}
              </CartPokemonTextId>
              <CartPokemonTextName>
                {formatPokemonName(pokemon.name)}
              </CartPokemonTextName>

              <PokemonTypes>
                {pokemon.types.map((current) => (
                  <CartPokemonTextType
                  key={`${pokemon.id}--${current.type.name}`}
                  type={{name: current.type.name}}
                  >
                    {current.type.name}
                  </CartPokemonTextType>
                ))}
              </PokemonTypes>
            </PokemonInfo>
            <PokemonImage
              source={{
                uri:
                  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/` +
                  `${formatValue(pokemon.id)}.png`,
              }}
            />
          </CartPokemon>
      )} />

    </Container>
  );
};

export default Home;
