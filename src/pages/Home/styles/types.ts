import { types } from './colors';

export type Type = keyof typeof types;

export interface TypeProps {
  type: {
    name: Type;
  };
}

export interface CardProps {
  types?: TypeProps[];
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
}

export interface PokemonType {
  type: {
    name: Type;
  };
}

export interface Response {
  data: Pokemon;
}
