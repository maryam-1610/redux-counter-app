import "./App.css";
import { Counter } from "./components";
import {useSelector} from 'react-redux';

function App() {
  const count = useSelector((state) => state?.counter?.count)

  return (
    <div style={{ background: "red" }}>
      <h1>Redux made it easy</h1>

      <p>Count is {count}</p>
      <Counter />
    </div>
  );
}

export default App;
