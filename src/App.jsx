import "./App.css";
import { Counter } from "./components";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state?.counter?.count);

  const users = ["Anthony", "Bob", "Mike", "Willson", "Taylor"];

  return (
    <div>
      <h1>Redux made it easy</h1>

      <p>Count is {count}</p>
      {users?.map((user) => (
        <Counter name={user} />
      ))}
    </div>
  );
}

export default App;
