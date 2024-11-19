import React, { useContext, useState } from "react";
import { Link, useActionData } from "react-router-dom";
import { Context } from "../store/appContext";
import FormNewContact from "../component/formulario";


const NewContactPage = () => {
    const {actions} = useContext(Context);

    return(
        <div>
            <FormNewContact actions={actions}/>
        </div>

    );
};

export default NewContactPage;