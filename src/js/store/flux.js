
const getState = ({ getStore, getActions, setStore }) => {//setStore acutualiza el store
	return {
		store: {
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
				},

			],

			listContacts: []


		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				
				const store = getStore();

				
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				
				setStore({ demo: demo });
			},

			createUser: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alessf", {
					method: "POST",

				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data);

					})
					.catch((error) => console.log(error));
			},

			getInfoContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alessf/contacts", {
					method: "GET"
				})
					.then((response) => {
						if (response.status == 404) {
							getActions().createUser()
						}
						if (response.ok) {
							return response.json()
						}
					})
					.then((data) => {
						if (data) {
							setStore({ listContacts: data.contacts })
						}
					})
					.catch((error => console.log(error)))
			},

			addContactToList: (contact) => {
				const store = getStore();
				setStore({ ...store, listContacts: [...store.listContacts, contact] })
			},

			createContact: (payload) => {
				fetch("https://playground.4geeks.com/contact/agendas/alessf/contacts", {
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(
						payload
					),
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						const actions = getActions(); 
						actions.addContactToList(data);
						console.log("Contacto agregado:", data);
					})
					.catch((error) => console.log(error));
			},
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/alessf/contacts/${id}`, {
					method: "DELETE",
				})
					.then((response) => {
						console.log(response)
						if (response.ok) {
							const store = getStore();
							const updatedContacts = store.listContacts.filter(contact => contact.id !== id);
							setStore({ listContacts: updatedContacts });
							console.log(`Contacto con ID ${id} eliminado`);
						} else {
							console.log("Error al eliminar contacto");
						}
					})
					.catch((error) => console.log(error));
			},

			editContact: (id, contact) => {
				const store = getStore()
				fetch(`https://playground.4geeks.com/contact/agendas/alessf/contacts/${id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(contact)
				})
					.then((response) => {
						if (response.ok) {
							return response.json()
						}
					})
					.then((data) => {
						if (data) {
							const updatedList = store.listContacts.map(contact => {
								if (contact.id == id) {
									contact = data
								}
								return contact
							})
							setStore({ listContacts: updatedList })
						}
					})
					.catch((error) => console.log(error));


			}
		}
	}
};


export default getState;
