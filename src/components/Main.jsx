import React, { useEffect, useState } from "react";
import {ContactList} from "./";
import {SelectedContact} from "./"
const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact,setSelectedContact] = useState({})


  async function getContacts(){
    try{
      const response = await fetch('http://jsonplace-univclone.herokuapp.com/users')
      const myContacts = await response.json()
      setContacts(myContacts)
    }catch(err){
      console.log(err)
    }
  }
useEffect(()=>{
  getContacts()
},[])


async function selectContact(contactId){
  try{
    const response = await fetch(`http://jsonplace-univclone.herokuapp.com/users/${contactId}` )
    const myContact = await response.json()
    setSelectedContact(myContact)
  }catch(err){
    console.log(err)
  }
}
//        <SelectedContact selectedContact = {selectedContact}/>

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <table>       

            <ContactList contacts={contacts} selectContact={selectContact}/>
        </table>
      </div>
    </div>
  );
};

export default Main;
