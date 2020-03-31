//primeiro arquivo que o HTML vai ler

import React from 'react';
import ReactDOM from 'react-dom';//integração do react com o navegador 
import App from './App';

ReactDOM.render(//render = colocar em tela
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')//colocando <APP /> dentro de root
);