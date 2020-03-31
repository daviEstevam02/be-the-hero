//JSX - HTML dentro do JS
//state - informação que sera mantida pelo componente vai renderizar e apresentar em TELA
//Não é possivel alterar o valor do State de uma forma direta

import React from 'react';
// import Header from './Header';
import Routes from './routes';
import './global.css';


function App() {
//   const [counter, setCounter] = useState(0);//useState nos retorna um array[valor,funçãoDeAtualização]

//   function increment(){
//     setCounter(counter+1)
//     console.log(counter);
//   }
  return ( 
  //   <div>
  // <Header>Contador: {counter}</Header>
  // <button onClick={increment}>Incrementar</button>
  // </div>
  <Routes />
  );
}

export default App;
