import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js";


const AddContact = () => {

    const { store, actions } = useContext(Context)
    let navigate = useNavigate();
    const { id } = useParams(); 

    const [nombre, setName] = useState("");
    const [teléfono, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [dirección, setAddress] = useState("");

    function guardarContacto(e) {
        e.preventDefault()
        if (nombre.trim() == "" || teléfono.trim() == "" || email.trim() == "" || dirección.trim() == "") {
            alert("Empty fields")
            return null
        }
        const payload = {
            name: nombre,
            phone: teléfono,
            email: email,
            address: dirección 
        };
        if (!id) {
            actions.createContact(payload)
        } else {
            actions.editContact(id, payload)
        }
        alert("Se grabo los datos del contacto");
        navigate("/");
        setName("");
        setPhone("");
        setEmail(""),
        setAddress("");

    }

    useEffect(() => {
        if (id && store.listContacts.length > 0) {
            const currentContact = store.listContacts.find(contact => contact.id == id)
            setName(currentContact.nombre)
            setPhone(currentContact.teléfono)
            setEmail(currentContact.email)
            setAddress(currentContact.dirección)
        }
    }, [id, store.listContacts])

    return (
        <div className="container">
            <h1 className="text-center">{!id ? "Agregar un nuevo contacto" : `Editar Contacto: ${nombre}`}</h1>

            <form className="container" onSubmit={guardarContacto}>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Nombre" onChange={(e) => setName(e.target.value)} value={nombre} required />

                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingresar email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Teléfono </label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Ingresar Teléfono" onChange={(e) => setPhone(e.target.value)} value={teléfono} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Dirección </label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Ingresar Dirección" onChange={(e) => setAddress(e.target.value)} value={dirección} required />
                </div>
                <div className="mb-3">
                    <button type="Enviar" className="btn btn-primary" >Guardar</button>
                </div>
            </form>

            <Link to="/">Volver a Contactos</Link>
        </div>
    );


};
export default AddContact;
