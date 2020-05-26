import React from 'react';
import Title from './components/Title'
import Navbar from './components/Navbar'
// import {estudiantes} from './algo.json'
function App() {
// const [lista, setLista] = useState({
//   ...estudiantes
// })

  return (
    <>
      <Navbar /> 
      <Title nombre="Registro"/>
    </>
  );
}

export default App;
