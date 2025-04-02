import "./App.css";
import Container1781432412011 from "./components/Container1781432412011";
import Menu1781432412011 from "./components/menu1781432412011";
import { useState } from "react";
import ScreenRender1781432412011 from "./components/ScreenRender1781432412011";

function App() {
  const [atual, setAtual] = useState("professor");

  const setTela = (tela) => {
    setAtual(tela);
    console.log (atual); 
  }
  return (

    <Container1781432412011>
      <Container1781432412011>
        <Menu1781432412011 setTela={setTela}/>
      </Container1781432412011>
      <Container1781432412011>
        <ScreenRender1781432412011 tela={atual} />
      </Container1781432412011>
    </Container1781432412011>

  );
}


export default App;
