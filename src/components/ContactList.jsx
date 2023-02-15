import react from "react";
import { ContactRow } from "./";

export default function ContactList(props) {
  const contacts = props.contacts;

  return (
    <tbody>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      {contacts.map((contact, idx) => {
        return <ContactRow key={`contacts:${idx}`} contact={contact} />;
      })}
    </tbody>
  );
}
