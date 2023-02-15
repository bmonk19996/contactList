import react from "react";

export default function ContactList(props) {
  const contacts = props.contacts;

  return (
    <div>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      {contacts.map((contact, idx) => {
        return (
          <tr key={`contacts:${idx}`}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
          </tr>
        );
      })}
    </div>
  );
}
