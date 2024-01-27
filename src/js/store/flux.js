const getState = ({ getStore, getActions, setStore }) => {
	
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
		contacts: [],
		contact: {}
	  },
	  actions: {
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
		},
		changeColor: (index, color) => {
		  const store = getStore();
  
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  setStore({ demo: demo });
		},
		fetchContacts: async () => {
		  try {

			const response = await fetch(
			  "https://playground.4geeks.com/apis/fake/contact/agenda/AndresMiranda2000"
			);
			const data = await response.json();
			setStore({ contacts: data || [] });
		  } catch (error) {
			console.error("Error fetching contacts:", error);
		  }
		},
		createContact: async (contactData) => {
		  try {
			const response = await fetch(
			  "https://playground.4geeks.com/apis/fake/contact/",
			  {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify(contactData),
			  }
			);
			const createdContact = await response.json();
		
			getActions().fetchContacts();
		  } catch (error) {
			console.error("Error creating contact:", error);
		  }
		},
		deleteContact: async (contactId) => {
		  try {
			const response = await fetch(
			  `https://playground.4geeks.com/apis/fake/contact/${contactId}`,
			  {
				method: "DELETE",
			  }
			);
			actions.fetchContacts();
		  } catch (error) {
			console.error("Error deleting contact:", error);
		  }
		},
  
		updateContact: async (contactId, contactData) => {
		  try {
			const response = await fetch(
			  `https://playground.4geeks.com/apis/fake/contact/${contactId}`,
			  {
				method: "PUT",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify(contactData),
			  }
			);

			if (response.ok) {

			  getActions().fetchContacts();
			} else {
			  console.error("Error updating contact:", response.status);
			}
		  } catch (error) {
			console.error("Error updating contact:", error);
		  }
		},
		seeContact: (contact) => {
		  setStore ({contact:contact})
		}
	  },
	};
  };
  
  export default getState;