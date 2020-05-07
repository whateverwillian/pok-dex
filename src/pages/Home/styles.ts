import styled, { css } from 'styled-components/native';

const types = {
  grass: css`
    background: #62b957;
  `,
  poison: css`
    background: #a552cc;
  `,
  fire: css`
    background: #fd7d24;
  `,
  flying: css`
    background: #748fc9;
  `,
  water: css`
    background: #4a90da;
  `,
  bug: css`
    background: #8cb230;
  `,
  normal: css`
    background: #9da0aa;
  `,
};

const cardTypes = {
  grass: css`
    background: #8bbe8a;
  `,
  poison: css`
    background: #9f6e97;
  `,
  fire: css`
    background: #f78551;
  `,
  flying: css`
    background: #83a2e3;
  `,
  water: css`
    background: #58Abf6;
  `,
  bug: css`
    background: #8bd674;
  `,
  normal: css`
    background: #b5b9c4;
  `,
}

interface TypeProps {
  type?: keyof typeof types;
}

interface CardProps {
  types?: TypeProps[];
}

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
    const response = types?.map(type => type.type.name);

    if (response.length > 1) return cardTypes[response[1]]

    return cardTypes[response[0]]
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
  font-size: 30px;
`;

export const PokemonTypes = styled.View`
  flex-direction: row;
`;

export const CartPokemonTextType = styled.Text<TypeProps>`
  margin-right: 5px;

  ${({ type }) => types[type || 'normal']}
`;

export const PokemonImage = styled.Image`
  height: 130px;
  width: 130px;
  position: relative;
  bottom: 32px;
  margin-left: auto;
`;
