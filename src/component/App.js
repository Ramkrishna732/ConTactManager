
import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Header';
import {uuid} from "uuidv4";
import AddContact from './AddContact';import ContactCard from './ContactCard';
import Contactlist from './ContactList';

function App() {
 const LOCAL_STORAGE_KEY="contacts"
  const [contacts,setContacts]=useState([]);
  const addConatcthandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  };
  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);


    
  }

  useEffect(()=>{
    const retriveContact=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContact) setContacts(retriveContact);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className="ui container">
     <Header/><br/><br/> 
     <AddContact addConatcthandler={addConatcthandler}/>
    <Contactlist contacts={contacts} getContactid={removeContactHandler}/>
    </div>
  );
}

export default App;
