import React from "react";

function ContactRow(props) {
  const contact = props.contact;
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}

export default ContactRow;
