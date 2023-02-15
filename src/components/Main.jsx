import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  async function getContacts(){
    try{
      const response = await fetch('http://jsonplace-univclone.herokuapp.com/users')
      const myContacts = await response.json()
      return myContacts
    }catch(err){
      console.log(err)
    }
  }
useEffect(async ()=>{
  setContacts(await getContacts())
},[])



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
