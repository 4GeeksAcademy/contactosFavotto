import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext.js";

const EditContact = () => {
    const { store, actions } = useContext(Context)
    let navigate = useNavigate();

    return (

        <div className="container">
            <h1 className="text-center">Subir contacto</h1>

            <form className="container">
                <div className="mb-3">
                    <label for="formGroupExampleInput1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Nombre" onChange={(e) => setName(e.target.value)} value={nombre} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingresar email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput3" className="form-label">Teléfono </label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Ingresar Teléfono" onChange={(e) => setPhone(e.target.value)} value={teléfono} />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput4" className="form-label">Dirección </label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Ingresar dirección" onChange={(e) => setAddress(e.target.value)} value={dirección} />
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary">Subir contactos</button>
                </div>
            </form>

            <Link to="/"><a>Volver a Contactos</a></Link>
        </div>
    )
}
export default EditContact;
