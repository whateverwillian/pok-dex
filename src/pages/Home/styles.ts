import styled, { css } from 'styled-components/native';

const types = {
  grass: css`
    background: #62b957;
  `,
  poison: css`
    background: #a552cc;
  `,
  fire: css`
    background: #fd7d28;
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
  dark: css`
    background: #58575f;
  `,
  dragon: css`
    background: #0f6ac0;
  `,
  electric: css`
    background: #eed535;
  `,
  fairy: css`
    background: #ed6ec7;
  `,
  fighting: css`
    background: #d04164;
  `,
  ghost: css`
    background: #556aae;
  `,
  ground: css`
    background: #dd7748;
  `,
  ice: css`
    background: #61cec0;
  `,
  psychic: css`
    background: #ea5d60;
  `,
  rock: css`
    background: #baab82;
  `,
  steel: css`
    background: #417d9a;
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
  dark: css`
    background: #6f6e78;
  `,
  dragon: css`
    background: #7383b9;
  `,
  electric: css`
    background: #f2cb75;
  `,
  fairy: css`
    background: #eba8c3;
  `,
  fighting: css`
    background: #eb4971;
  `,
  ghost: css`
    background: #8571be;
  `,
  ground: css`
    background: #f78551;
  `,
  ice: css`
    background: #91d8df;
  `,
  psychic: css`
    background: #ff6568;
  `,
  rock: css`
    background: #d4c294;
  `,
  steel: css`
    background: #4c91b2;
`,
}

interface TypeProps {
  type?: keyof typeof types | string;
}

export interface CardProps {
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

  ${({ type }) => types[type || 'normal']}
`;

export const PokemonImage = styled.Image`
  height: 130px;
  width: 130px;
  position: relative;
  bottom: 32px;
  margin-left: auto;
`;
