import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const FormNewContact = () => {

    const { store, actions } = useContext(Context);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const clearForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setAddress("")};

    return(
        <div className="container justify-content-center">
            <h1>Agregar nuevo contacto</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Full name</span>
                <input type="text" 
                    className="form-control"
                    onChange={(event) => setName(event.target.value)}
                    value={name} placeholder="Add your full name" aria-label="Username" aria-describedby="basic-addon1"
                    />
            </div>     

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" 
                    className="form-control" 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email} placeholder="Add your email address" aria-label="Email" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input type="text" 
                    className="form-control" 
                    onChange={(event) => setPhone(event.target.value)}
                    value={phone} placeholder="Add your phone" aria-label="Phone" aria-describedby="basic-addon1"/>
            </div>
            
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input type="text" 
                    className="form-control" 
                    onChange={(event) => setAddress(event.target.value)}
                    value={address} placeholder="Add your address" aria-label="Address" aria-describedby="basic-addon1"/>
            </div>

            <div>
                <button 
                    className="saveContact btn btn-success w-100" 
                    onClick={() => {
                        actions.saveContact({
                        name: name,
                        email: email,
                        phone: phone,
                        address: address
                    });
                    clearForm();
                    }}>
                    Save
                </button>
                <p>
                    <Link to="/">
                        <span>ir de nuevo a contactos</span>
                    </Link>
                </p>
                
            </div>
        </div>
    )
}

export default FormNewContact;