import "./App.css";
import { Counter } from "./components";
import {useSelector} from 'react-redux';

function App() {
  const count = useSelector((state) => state?.counter?.count)

  return (
    <div>
      <h1>Redux made it easy</h1>

      <p>Count is {count}</p>
      <Counter name='Anthony' />
      <Counter name='Bob' />
      <Counter name='Mike' />


    </div>
  );
}

export default App;
