import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ contact, onDeleteContact }) => {
  const { actions } = useContext(Context);

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "black",
    border: "1px solid #000",
    borderRadius: "10px",
    padding: "10px",
    margin: "20px auto",
    width: "200%", 
    maxWidth: "600px",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%", 
    marginRight: "20px", 
  };

  const detailsStyle = {
    textAlign: "left",
    flex: 1,
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row", 
    alignItems: "center",
    marginTop: "-110px"
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    color: "black", 
  };


  const defaultImageUrl = "https://cdn.discordapp.com/attachments/1163524764309147730/1200897984309760090/blank-profile-picture-973460_960_720.png";

  return (
    <div className="col">
      <div style={cardStyle}>
        <img src={defaultImageUrl} alt={contact.full_name} style={imageStyle} />

        <div style={detailsStyle}>
          <h4 className="display-7">{contact.full_name}</h4>
          <p>
            <strong>Dirección:</strong> {contact.address}
          </p>
          <p>
            <strong>Teléfono:</strong> {contact.phone}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
        </div>

        <div style={buttonContainerStyle}>
          <Link
            to={`/updateContact`}
            className="btn btn-warning me-2 mb-2"
            style={buttonStyle}
            onClick={() => {
              actions.seeContact(contact);
            }}
          >
          Editar Contacto
          </Link>

          <button
          type="button"
          className="btn btn-danger"
          style={buttonStyle}
          onClick={() => onDeleteContact(contact.id)}
          >
          Eliminar Contacto
         </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
