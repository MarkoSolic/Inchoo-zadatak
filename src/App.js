import "./App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Content from "./components/Content";

function App() {
  const [click, setClick] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setClick(!click)}>
        <AiOutlineShoppingCart fontSize="2em" />
      </button>
      {click && <Content />}
    </div>
  );
}

export default App;
