export default function Dice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return <p> Dice Roll: {roll}</p>;
}