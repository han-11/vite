import "./Slots.css"

export default function Slots({ val1, val2, val3 }) {
  const isWin = val1 === val2 && val1=== val3;
  return (<div className="Slots">
    <h1>{val1}{val2}{val3}</h1>
    <h1 style={{ color: isWin ? "green" : "red" }}>
      {isWin ? "You Win" : "You lose"}
    </h1>
    { isWin && <h3 >Congrats!!!</h3> }
  </div>)
}