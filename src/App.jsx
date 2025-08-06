import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button 2 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Users></Users>
      <Team></Team>

      {/* <Counter></Counter>
      {/* <button onClick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      {/* passing parameter }
      <button onClick={() => addToFive(6)}>five</button> */}
    </>
  );
}

export default App;
