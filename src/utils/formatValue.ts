function formatValue(value: number): string {
  if (value > 0 && value < 10) {
    return `00${value}`;
  }
  if (value >= 10 && value < 100) {
    return `0${value}`;
  }
  return `${value}`;
}

export default formatValue;
