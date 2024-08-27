import { useState } from "react";

const FormularioSuperheroes = (props) => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordconfirm] = useState("");
    const [formError, setFormError] = useState("");

    const resetearDatos = () => {
        setName("");
        setLastname("");
        setEmail("");
        setPassword("");
        setPasswordconfirm("");
    }

    const agregarSuper = (event) => {
        event.preventDefault();
        if(!name || !lastname || !email || !password || !password_confirm){
            setFormError("Por favor completa todos los datos");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setFormError("Por favor ingresa un correo electrónico válido");
            return;
        }

        if (name.length < 4) {
            setFormError("El nombre debe tener al menos 4 caracteres");
            return;
        }

        if (name.length < 4) {
            setFormError("El nombre debe tener al menos 4 caracteres");
            return;
        }

        if (password !== password_confirm) {
            setFormError("Las contraseñas no coinciden");
            return;
        }

        props.agregarSuperheroe(name, lastname, email, password, password_confirm);
        resetearDatos();
        setFormError(""); 
    }

    return (
      <div>
        <h1>Bienvenido a la Liga de Superhéroes</h1>
        <h2>Registro de Superhéroes:</h2>
        <div className="container">
          <form onSubmit={agregarSuper}>
           {formError && <p style={{ color: 'red' }}>{formError}</p>}
            <div className='formContainer'>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}></input>
            </div>
  
            <div className='formContainer'>
            <label htmlFor="lastname">Apellido:</label>
            <input type="text" id="lastname" value={lastname} onChange={(event) => setLastname(event.target.value)}></input>
            </div>
  
            <div className='formContainer'>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
            </div>
  
            <div className='formContainer'>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            </div>
  
            <div className='formContainer'>
            <label htmlFor="password_confirm">Confirmar Contraseña:</label>
            <input type="password" id="password_confirm" value={password_confirm} onChange={(event) => setPasswordconfirm(event.target.value)}></input>
            </div>
  
            <button type="submit">Crear Superhéroe</button>
          </form>
        </div>
      </div>
    );
}

export default FormularioSuperheroes;
