import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>{<Buttons />}</h1>
    </div>
  );
}

function addFunc(x, y) {
  return x + y;
}

function multiFunc(x, y) {
  return x * y;
}
function subtractFunc(x, y) {
  return x - y;
}

function divideFunc(x, y) {
  return x / y;
}

function Buttons() {
  return <button onClick> 1 </button>;
}

console.log(divideFunc(4, 5));
