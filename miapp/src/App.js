
import './App.css';
import './index.css';
import Button from './Button.js';
import Display from './Display.js';
import React from 'react';

export default function App() {

  // const carritoImage=<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M0 0.875C0 0.70924 0.065848 0.550268 0.183058 0.433058C0.300269 0.315848 0.45924 0.25 0.625 0.25H2.5C2.63941 0.250039 2.77481 0.296688 2.88466 0.382531C2.99452 0.468374 3.07251 0.58848 3.10625 0.72375L3.6125 2.75H18.125C18.2168 2.75008 18.3074 2.77038 18.3904 2.80944C18.4735 2.8485 18.5469 2.90537 18.6055 2.976C18.6641 3.04664 18.7064 3.12931 18.7294 3.21815C18.7525 3.30698 18.7556 3.3998 18.7388 3.49L16.8638 13.49C16.8369 13.6332 16.7609 13.7626 16.6489 13.8557C16.5368 13.9488 16.3957 13.9999 16.25 14H5C4.85429 13.9999 4.71321 13.9488 4.60114 13.8557C4.48907 13.7626 4.41306 13.6332 4.38625 13.49L2.5125 3.50875L2.0125 1.5H0.625C0.45924 1.5 0.300269 1.43415 0.183058 1.31694C0.065848 1.19973 0 1.04076 0 0.875ZM6.25 14C5.58696 14 4.95107 14.2634 4.48223 14.7322C4.01339 15.2011 3.75 15.837 3.75 16.5C3.75 17.163 4.01339 17.7989 4.48223 18.2678C4.95107 18.7366 5.58696 19 6.25 19C6.91304 19 7.54893 18.7366 8.01777 18.2678C8.48661 17.7989 8.75 17.163 8.75 16.5C8.75 15.837 8.48661 15.2011 8.01777 14.7322C7.54893 14.2634 6.91304 14 6.25 14ZM15 14C14.337 14 13.7011 14.2634 13.2322 14.7322C12.7634 15.2011 12.5 15.837 12.5 16.5C12.5 17.163 12.7634 17.7989 13.2322 18.2678C13.7011 18.7366 14.337 19 15 19C15.663 19 16.2989 18.7366 16.7678 18.2678C17.2366 17.7989 17.5 17.163 17.5 16.5C17.5 15.837 17.2366 15.2011 16.7678 14.7322C16.2989 14.2634 15.663 14 15 14ZM6.25 15.25C6.58152 15.25 6.89946 15.3817 7.13388 15.6161C7.3683 15.8505 7.5 16.1685 7.5 16.5C7.5 16.8315 7.3683 17.1495 7.13388 17.3839C6.89946 17.6183 6.58152 17.75 6.25 17.75C5.91848 17.75 5.60054 17.6183 5.36612 17.3839C5.1317 17.1495 5 16.8315 5 16.5C5 16.1685 5.1317 15.8505 5.36612 15.6161C5.60054 15.3817 5.91848 15.25 6.25 15.25ZM15 15.25C15.3315 15.25 15.6495 15.3817 15.8839 15.6161C16.1183 15.8505 16.25 16.1685 16.25 16.5C16.25 16.8315 16.1183 17.1495 15.8839 17.3839C15.6495 17.6183 15.3315 17.75 15 17.75C14.6685 17.75 14.3505 17.6183 14.1161 17.3839C13.8817 17.1495 13.75 16.8315 13.75 16.5C13.75 16.1685 13.8817 15.8505 14.1161 15.6161C14.3505 15.3817 14.6685 15.25 15 15.25Z" fill="#06B6D4"/>
  // </svg>
  let initialNull=null
  let initialZero=0

  const [prevNumber,setPrevNumber] = React.useState(initialNull);
  const [operant, setOperant] = React.useState(initialNull);
  const [currentnumber, setCurrentnumber ] = React.useState(initialZero);
  
  function ingresarDatos(nro){
    if(nro===0&&String(currentnumber)==="0"){setCurrentnumber("0")}
    else{
      if(String(currentnumber)==="0") {setCurrentnumber(+nro)}
      else{
          if (String(currentnumber).includes("."))
          { if(String(nro)==="."){}
            else{setCurrentnumber(String(currentnumber).concat(nro))}
          }
          else {setCurrentnumber(String(currentnumber).concat(nro))}
      }
    }
  }
  function borrarUltimo() {
    setCurrentnumber(String(currentnumber).slice(0, -1))
  }

  function resetCalculator() {
    
    setPrevNumber(initialNull);
    setOperant(initialNull);
    setCurrentnumber(initialZero);
  }

  function ingresarSigno(signo) {
    setPrevNumber(currentnumber);
    setOperant(signo);
    setCurrentnumber(0);
  }
  function rpta(){
    // eslint-disable-next-line no-eval
    setCurrentnumber(eval(prevNumber+operant+currentnumber).toString())
 
  }

  return (
    <div className="App">
      <div className="container"> 
          <Button clase='entre' value="/"  onClick={(e)=>ingresarSigno("/")}></Button>
          <Button clase='header' value="Comprando"  ></Button>
          <Display  value={currentnumber} ></Display>

          <Button clase='uno' value="1" onClick={(e)=>ingresarDatos(1)}></Button>
          <Button clase='dos' value="2" onClick={(e)=>ingresarDatos(2)}></Button>
          <Button clase='tres' value="3" onClick={(e)=>ingresarDatos(3)}></Button>
          <Button clase='borrar1' value="b_1" onClick={(e)=>borrarUltimo()}></Button>
          <Button clase='por' value="x" onClick={(e)=>ingresarSigno("*")}></Button>
          <Button clase='menos' value="-" onClick={(e)=>ingresarSigno("-")}></Button>
          <Button clase='mas' value="+"  onClick={(e)=>ingresarSigno("+")}></Button>
          <Button clase='cuatro' value="4" onClick={(e)=>ingresarDatos(4)} ></Button>
          <Button clase='cinco' value="5" onClick={(e)=>ingresarDatos(5)} ></Button>
          <Button clase='seis' value="6" onClick={(e)=>ingresarDatos(6)} ></Button>
          <Button clase='siete' value="7" onClick={(e)=>ingresarDatos(7)} ></Button>
          <Button clase='ocho' value="8" onClick={(e)=>ingresarDatos(8)} ></Button>
          <Button clase='nueve' value="9" onClick={(e)=>ingresarDatos(9)} ></Button>
          <Button clase='borrarTodo' value="C" onClick={(e)=>resetCalculator()}></Button>
          <Button clase='calendar' value="bT" ></Button>
          <Button clase='cero' value="0" onClick={(e)=>ingresarDatos(0)} ></Button>
          <Button clase='punto' value="." onClick={(e)=>ingresarDatos(".")} ></Button>
          <Button clase='enter' value="enter" onClick={(e)=>rpta()}>enter</Button>
          </div>
      </div>
      
  );
}
