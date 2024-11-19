import { container } from "webpack";
import EditContact from "../component/editContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
	
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContacts: async() => {
				const response = await fetch ("https://playground.4geeks.com/contact/agendas/alessf"
,{
					method: "GET"
				})
				const data = await response.json();
				setStore({contactList: data.contacts});
			},

			saveContact: async(contactData) =>{
				
				if (!contactData.name || !contactData.email || !contactData.phone || !contactData.address) {
					console.error("All fields are required.");
					return;
				}
				const response = await fetch ("https://playground.4geeks.com/contact/agendas/alessf/contacts", {
					method: "POST",
					body: JSON.stringify(contactData),
					headers: {
						"Content-Type": "application/json"
					}
				})
				getActions().loadContacts();
			},

			deleteContact: async(id) =>{
				try{
					const response = await fetch ("https://playground.4geeks.com/contact/agendas/alessf/contacts/" + id, {
					method: "DELETE",
					});
					if(response.ok) {
						console.log("Usuario borrado")
						getActions().loadContacts();
					} else {
						console.error("Error al eliminar contactro")
					}
				} catch (error) {
					console.error("Error en la eliminación del contacto:", error);
				}	
			},

			editOneContact: async (contactData, id) => {
				try {
					const response = await fetch ("https://playground.4geeks.com/contact/agendas/alessf/contacts/" + id, {
						method: "PUT",
						body: JSON.stringify(contactData),
						headers: {
						"Content-Type": "application/json"
					}});
					if (response.ok) {
						await getActions().loadContacts();
						console.log("Contacto actualizado")
					} else {
						console.error("El contacto no fue actualizado")
					}
				} catch (error) {
					console.error("Error en la actualización del contacto", error);
				}
			},

			createUser: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/alessf", {
					method: "POST"
				})
			},

			changeColor: (index, color) => {
				
				const store = getStore();

				
			
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
