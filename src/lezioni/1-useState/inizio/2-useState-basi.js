import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  
  const [titolo, setChange] = useState("Hello World")

let cambioTitolo = () =>{
  
    if(titolo === "Hello World"){
       setChange("Title changed")
    }else if(titolo === "Title changed"){
       setChange("Hello world")
    }
    
}

  return (
    <React.Fragment>
    <h1>{titolo}</h1>
    <button onClick={cambioTitolo} className="customization">Change me</button>
  </React.Fragment>
  )
};

export default UsoBase;
