import React from 'react';
 
import "./pages/landing.css"

import logoImg from './assets/Logo.svg'

interface TitleProps{
  text: string
}
function Title(props:TitleProps) {
  return(
    <h1> {props.text} </h1>
  )
}


function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>

        <a href="#" className='enter-app'>
          x
        </a>

      </div> 
    </div>
  );
}

export default App;
