import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo

let titolo = "Hello world"

let cambioTitolo = () =>{
  titolo = "titolo cambiato"
  console.log(titolo)
}
const ErroreBase = () => {
  return <React.Fragment>
    <h1>{titolo}</h1>
    <button onClick={cambioTitolo} className="customization">Change me</button>
  </React.Fragment>;
};

export default ErroreBase;
