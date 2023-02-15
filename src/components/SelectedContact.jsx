import React from "react";
import Favorite from"./Favorite"
export default function SelectedContact(props) {
    const selectedContact =props.selectedContact
    const favorite = props.favorite
    const setFavorite = props.setFavorite

  return (
    <div id="single-contact">
      <div id="contact-info">
        <p>
          <b>Name: </b>{selectedContact.name}
        </p>
        <p>
          <b>Email: </b>{selectedContact.email}
        </p>
        <p>
          <b>Phone: </b>{selectedContact.phone}
        </p>
        <div>
          <b>Address: </b>
          <p>
            <b>Street: </b>{selectedContact.address.street}
            <br />
            <b>City/State: </b>{selectedContact.address.city} {selectedContact.address.zipcode}
          </p>
        </div>
        <p>
          <b>Company: </b>{selectedContact.company.name}
        </p>
        <Favorite favorite={favorite} contact={selectedContact} selectContact={props.selectContact}/>
      </div>
    </div>
   
  );
}
