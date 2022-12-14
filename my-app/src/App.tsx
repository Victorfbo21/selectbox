import React from 'react';
import './App.css';
import useCidades from './hooks/Cidades';
import useEstados from './hooks/Estados';

function App() {
  const { estados } = useEstados();
  const { cidades }= useCidades();
  return (
    <>
    <div className="App">
      <select>
         {estados.map((estado) =>(<option>{estado.nome}</option>))}
      </select>
      <select>
          {cidades.map((cidade)=> (<option>{cidade.nome}</option>))}
      </select>

    </div>
    </>
  );
}

export default App;
