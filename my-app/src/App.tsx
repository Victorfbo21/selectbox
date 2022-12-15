import React from 'react';
import './App.css';
import useCidades from './hooks/Cidades';
import useEstados from './hooks/Estados';
import { useState } from 'react';

function App() {
  const { estados } = useEstados();
  const [estadoSelecionado , setestadoSelecionado] = useState('');
  const { cidades, carregando: carregandoCidades } = useCidades({uf:{estadoSelecionado}});
  
  const MudaEstado = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    console.log(e.target.value)
    setestadoSelecionado(e.target.value)
}
  

 
  
  return (
    <>
    <div className="App">
      <select value={estadoSelecionado} onChange={MudaEstado}>
         {estados.map((estado) => (<option key={estado.id} value={estado.sigla}>{estado.nome}</option>))}
      </select>
      {carregandoCidades ? (<p>Carregando...</p>)
      :(      
      <select>
        {cidades.map((cidade)=> (<option  key={cidade.codigo_ibge}>{cidade.nome}</option>))}
      </select>)  
    }
      

    </div>
    </>
  );
}

export default App;
