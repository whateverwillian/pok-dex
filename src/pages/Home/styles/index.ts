import styled from 'styled-components/native';

import { types, cardTypes } from './colors';
import { Type, CardProps, TypeProps } from './types';

export const Container = styled.View`
  flex: 1;
  margin: 20px 30px;
`;

export const Title = styled.Text`
  color: #17171b;
  font-size: 32px;
  font-weight: bold;
  padding: 10px 0;
`;

export const SubTitle = styled.Text`
  color: #747476;
  font-size: 17px;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  height: 60px;
  margin: 20px 0;
  padding: 10px 10px 10px 20px;
  font-size: 15px;

  color: #747476;
  background: #e5e5e5;
`;

export const SearchBarText = styled.TextInput`
  background: transparent;
  border-radius: 10px;
  height: 60px;
  padding: 10px 20px;
  font-size: 15px;

  color: #747476;
`;

export const CartPokemon = styled.View<CardProps>`
  height: 120px;
  margin-top: 30px;
  border-radius: 15px;
  flex-direction: row;
  padding: 10px 0 10px 10px;

  ${({ types }) => {
    if (types) {
      const typeNames: Type[] = types?.map(type => type.type.name);

      if (typeNames.length > 1)
        return cardTypes[typeNames[1]]

      return cardTypes[typeNames[0]];
    }
  }}
`;

export const PokemonInfo = styled.View``;

export const CartPokemonTextId = styled.Text`
  color: rgba(23, 23, 27, 0.6);
  font-weight: bold;
  font-size: 15px;
`;

export const CartPokemonTextName = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 32px;
`;

export const PokemonTypes = styled.View`
  flex-direction: row;
`;

export const CartPokemonTextType = styled.Text<TypeProps>`
  margin: 5px 5px 0 0;
  padding: 4px 10px;
  border-radius: 4px;
  text-align: center;
  height: 30px;
  color: white;
  font-weight: 500;

  ${({ type }) => types[type.name]}
`;

export const PokemonImage = styled.Image`
  height: 130px;
  width: 130px;
  position: relative;
  bottom: 32px;
  margin-left: auto;
`;
