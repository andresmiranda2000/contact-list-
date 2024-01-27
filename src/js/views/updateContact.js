import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export const UpdateContact = () => {

  const { actions, store } = useContext(Context);
    const navigate = useNavigate();

  const [contact, setContact] = useState(store.contact);

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      method: "PUT",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://playground.4geeks.com/apis/fake/contact/${contact.id}`,
      config
    )
      .then((response) => response.text())
        .catch((error) => console.log("error", error))

      .then((response) => {
        actions.fetchContacts();
        navigate("/contact");
      });
  };
  return (
      <form className="container p-4" onSubmit={handleSubmit}>
          <h1 className="display-4 mb-4">Update contact</h1>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Nombre Completo
        </label>
        <input
          type="name"
          name="full_name"
          className="form-control"
          id="inputName"
          value={contact.full_name}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="name"
          name="email"
          className="form-control"
          id="inputEmail"
          value={contact.email}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="mb-3"></div>
      <div className="mb-3">
        <label htmlFor="inputPhone" className="form-label">
          Número Celular
        </label>
        <input
          type="name"
          name="phone"
          className="form-control"
          id="inputPhone"
          value={contact.phone}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="inputAddress" className="form-label">
          Dirección
        </label>
        <input
          type="name"
          name="address"
          className="form-control"
          id="inputAddress"
          value={contact.address}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="">
        <button type="submit" className="btn btn-success btn-lg">
          Actualizar Contacto
        </button>
        <Link to={"/contact"} type="button" className="btn btn-danger ms-4 btn-lg">
          Ir atrás
        </Link>
      </div>
    </form>
  );
};