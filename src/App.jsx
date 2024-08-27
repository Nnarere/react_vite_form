import './App.css';
import React, { useState } from 'react';
import FormularioSuperheroes from './formulario';

const App = () => {
  const [listaSuper, setListaSuper] = useState([]);

  const agregarSuperheroe = (name, lastname, email, password, password_confirm) => {
    const nuevoSuper = {
      name, lastname, email, password, password_confirm
    };

    setListaSuper([...listaSuper, nuevoSuper]);
  };

  return (
    <>
      <FormularioSuperheroes agregarSuperheroe={agregarSuperheroe} />
      <div className='containerList'>
        <h1>Lista de Superhéroes Oficiales</h1>
        <table className="superList">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {listaSuper.map((superheroe, index) => (
              <tr key={index}>
                <td>{superheroe.name}</td>
                <td>{superheroe.lastname}</td>
                <td>{superheroe.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
