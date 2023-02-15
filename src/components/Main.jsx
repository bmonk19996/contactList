import React, { useEffect, useState } from "react";
import { ContactList } from "./";
import { SelectedContact } from "./";
const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const selectContact = async (contactId, favoriteData) => {
    try {
    const response = await fetch(`http://jsonplace-univclone.herokuapp.com/users/${contactId}`);
    const contact = await response.json();
    setSelectedContact({...contact, ...favoriteData});
    }catch(error){
      console.log(error)
    }
  }
  // async function selectContact(contactId) {
  //   try {
  //     const response = await fetch(
  //       `http://jsonplace-univclone.herokuapp.com/users/${contactId}`
  //     );
  //     const myContact = await response.json();
  //     setSelectedContact(myContact);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


  async function getContacts() {
    try {
      const response = await fetch(
        "http://jsonplace-univclone.herokuapp.com/users"
      );
      const myContacts = await response.json();
      setContacts(myContacts);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getContacts();
  }, []);


  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        

          {selectedContact ? 
          <SelectedContact selectedContact={selectedContact} selectContact={selectContact}/> :
          <ContactList contacts={contacts} selectContact={selectContact} />}
        
      </div>
    </div>
  );
};

export default Main;
