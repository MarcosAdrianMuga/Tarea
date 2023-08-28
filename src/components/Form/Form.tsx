import "./Form.css";
import { useState } from 'react'

export default function Form() {
    const [form, setForm] = useState({
        Nombre: "",
        Email: "",
        Num: "",
        Mensaje: ""
    })

    const handleClick = () => {
        
    }

    const handleCambio = (e) => {
        switch(e.target.name){
            case "Nombre": setForm({...form, Nombre: e.target.value})
            break;
            case "Email": setForm({...form, Email: e.target.value})
            break;
            case "Num": setForm({...form, Num: e.target.value})
            break;
            case "Mensaje": setForm({...form, Mensaje: e.target.value})
            break;
        }
    }
  return (
    <form>
      <div className="labels">
        <label className="nombre">Nombre completo</label>
        <label className="email">Email</label>
        <label className="telefono">Número telefónico</label>
      </div>
      <input onChange={(e) => handleCambio(e)} className="inp" type="text" id="nombre" name="Nombre" />
      <input onChange={(e) => handleCambio(e)} className="inp" type="email" id="email" name="Email" />
      <input onChange={(e) => handleCambio(e)} className="inp" type="tel" id="telefono" name="Num" />
      <br/>
      <label className="mensaje">Mensaje</label>
      <br />
      <textarea onChange={(e) => handleCambio(e)} id="mensaje" name="mensaje"></textarea>
      <br />

      <button onClick={handleClick()} type="submit">Enviar</button>
    </form>
  );
}
