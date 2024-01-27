import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddContact = ({ params }) => {
  console.log("Parámetros de llegada:", params);

  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const { contactId } = useParams();

  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    agenda_slug: "AndresMiranda2000",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (contactId) {
      const selectedContact = store.contacts.find(
        (contact) => contact.id === contactId
      );
      if (selectedContact) {
        setContactData({
          ...selectedContact,
          agenda_slug: "AndresMiranda2000",
        });
      }
    }
  }, [contactId, store.contacts]);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactData.id) {
      actions.updateContact(contactData.id, contactData);
    } else {
      actions.createContact(contactData);
    }

    navigate("/contact");
  };

  return (
    <div className="p-3 container">
      <form onSubmit={handleSubmit}>
        <h1 className="display-5 mb-4 text-center">Añadir Contacto</h1>
        <label htmlFor="fullName" className="form-label">
          Nombre Completo
        </label>
        <input
          className="form-control form-control-lg"
          id="fullName"
          type="text"
          name="full_name"
          value={contactData.full_name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email" className="form-label">
          Correo Electrónico
        </label>
        <input
          className="form-control form-control-lg"
          id="email"
          type="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="address" className="form-label">
          Dirección
        </label>
        <input
          className="form-control form-control-lg"
          id="address"
          type="text"
          name="address"
          value={contactData.address}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone" className="form-label">
          Número Celular
        </label>
        <input
          className="form-control form-control-lg"
          id="phone"
          type="tel"
          name="phone"
          value={contactData.phone}
          onChange={handleChange}
          required
        />
        <div>
          <button
            className="btn btn-info btn-lg mt-3"
            type="submit"
            style={{
              background: "#1779f2",
              color: "white",
              width: "100%",
              textAlign: "center",
              border: "none"
            }}
          >
            Guardar
          </button>

          <Link
            to="/contact"
            className="mt-3"
          >
            Ir atrás
          </Link>
        </div>
      </form>
    </div>
  );
};
