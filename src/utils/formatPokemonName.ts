function formatPokemonName(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1).split('-')[0]
}

export default formatPokemonName;
