import { PeopleType } from "../../MainApp";
import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";

const Contact = ({ name, phoneNumber }: PeopleType) => { 
const { contacts, setContacts } = useContext(ContactsContext);
const handleDeletion = () => {
  setContacts((current) => current.filter((contact) => {
    return JSON.stringify(contact) !== JSON.stringify({name: name, phoneNumber: phoneNumber})
  }))
}

  return (
    <div className='text-and-box'>
    <div>
      <div className='person-name'> {name} </div>
      <div className='person-number'> {phoneNumber} </div>
    </div>
    <div className='delete-and-gap'>
      <button 
        className='delete'
        onClick={handleDeletion}>
        &#215;
      </button>
    </div>
  </div>
  )
}

export default Contact;
