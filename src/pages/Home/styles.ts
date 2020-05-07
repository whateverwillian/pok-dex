import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 30px 40px;
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

export const CartPokemon = styled.View``;

export const CartPokemonText = styled.Text``;
