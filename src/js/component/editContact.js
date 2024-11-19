import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";


const EditContact = () => {

    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const { id } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const contactToEdit = store.contactList.find(contact => contact.id === parseInt(id));
        if(contactToEdit)
        {
            setName(contactToEdit.name);
            setPhone(contactToEdit.phone);
            setEmail(contactToEdit.email);
            setAddress(contactToEdit.address)
        }  
    }, [id]);

    return (
        <div className="container justify-content-center">
            <h1>Edit a contact</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Full name</span>
                <input type="text" 
                    className="form-control"
                    onChange={(event) => setName(event.target.value)}
                    value={name} aria-label="Username" aria-describedby="basic-addon1"
                    />
            </div>     

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" 
                    className="form-control" 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email} aria-label="Email" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input type="text" 
                    className="form-control" 
                    onChange={(event) => setPhone(event.target.value)}
                    value={phone} aria-label="Phone" aria-describedby="basic-addon1"/>
            </div>
            
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input type="text" 
                    className="form-control" 
                    onChange={(event) => setAddress(event.target.value)}
                    value={address} aria-label="Address" aria-describedby="basic-addon1"/>
            </div>

            <div>
                <button className="editContact btn btn-success w-100" 
                    onClick={() => {actions.editOneContact({
                        name: name,
                        email: email,
                        phone: phone,
                        address: address
                    }, id); navigate("/")}}
                >
                    Update
                </button>
                <p>
                    <Link to="/">
                        <span>volver a contactos</span>
                    </Link>
                </p>
                
            </div>
        </div>
    )
}

export default EditContact;