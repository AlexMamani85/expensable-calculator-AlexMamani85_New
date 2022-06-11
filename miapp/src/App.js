
import './App.css';
import './index.css';
import Button from './Button.js';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Button clase='entre' input="/"></Button>
          <Button clase='header' input="Comprando" ></Button>
          <Button clase='display' input="0" ></Button>

          <Button clase='uno' input="1" ></Button>
          <Button clase='dos' input="2" ></Button>
          <Button clase='tres' input="3" ></Button>
          <Button clase='borrar1' input="b_1" ></Button>
          <Button clase='por' input="x" ></Button>
          <Button clase='menos' input="-" ></Button>
          <Button clase='mas' input="+" ></Button>
          <Button clase='cuatro' input="4" ></Button>
          <Button clase='cinco' input="5" ></Button>
          <Button clase='seis' input="6" ></Button>
          <Button clase='siete' input="7" ></Button>
          <Button clase='ocho' input="8" ></Button>
          <Button clase='nueve' input="9" ></Button>
          <Button clase='borrarTodo' input="C" ></Button>
          <Button clase='calendar' input="bT" ></Button>
          <Button clase='cero' input="0" ></Button>
          <Button clase='punto' input="." ></Button>
          <Button clase='enter' input="enter" >enter</Button>
          </div>
      </div>
      
  );
}

export default App;
