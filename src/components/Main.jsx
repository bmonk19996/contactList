import React, { useState } from "react";
import dummyContacts from "../dummyData";
import ContactList from "./ContactList";

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <table>       
            <ContactList contacts={contacts} />
        </table>
      </div>
    </div>
  );
};

export default Main;
