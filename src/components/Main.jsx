import React, { useState } from "react";
import  dummyContacts from "../dummyData";

const Main = () => {
const [contacts, setContacts] = useState(dummyContacts);
console.log(contacts)
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
            {contacts.map((contact) => {
              return <tr>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                </tr>
              ;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
