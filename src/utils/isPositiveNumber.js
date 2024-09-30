export default function isPositiveNumber(value) {
  const num = Number(value);

  return Number.isInteger(num) && num > 0;
}
