import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard";

const Contact = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchContacts();
  }, [actions]);

  const handleDeleteContact = (contactId) => {
    actions.deleteContact(contactId);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    marginTop: "-50px", 
  };

  const addButtonStyle = {
    marginTop: "10px",
    backgroundColor: "#4ca64b",
    color: "white", 
    border: "none",
  };

  return (
    <div style={containerStyle}>

      <div className="d-flex">
        <Link to="/addContact" className="btn btn-primary" style={addButtonStyle}>
          Añadir Contacto
        </Link>
      </div>

      <div className="p-4">
        <div className="row g-4">
          {store.contacts.map(
            (contact) =>
              contact.id && (
                <div key={contact.id} className="col-12"> 
                  <ContactCard
                    contact={contact}
                    onDeleteContact={handleDeleteContact}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
