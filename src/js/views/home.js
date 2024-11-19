import React, { StrictMode, useEffect, useContext } from "react";
import "../../styles/home.css";
import ContactCard from "../component/contactCard.js"
import { Context } from "../store/appContext";



export const Home = () => {

	
	const {store, actions } = useContext(Context);

	actions.createUser();
	
	useEffect(() => {
		actions.loadContacts();
	}, []);

	return (
		<div className="text-center mt-5">
			<div className = "container">
				{store.contactList.map((item)=>{
					return (
						<div className="component" key= {item.id}>
							<ContactCard 
								id = {item.id}
								name= {item.name}
								address= {item.address}
								phone= {item.phone}
								email= {item.email}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
};

export default Home