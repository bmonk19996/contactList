import React from "react";

function ContactRow(props) {
  const contact = props.contact;
  const selectContact = props.selectContact
  return (
    <tr onClick={()=>{
      selectContact(contact.id)
    }}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}

export default ContactRow;
