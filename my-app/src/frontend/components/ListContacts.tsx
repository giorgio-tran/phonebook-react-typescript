import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";
import Contact from "./Contact";

const ListContacts = () => {
  const { contacts } = useContext(ContactsContext);

  return (
    <div>
      {contacts.map((contact, index) => (<Contact name={contact.name} phoneNumber={contact.phoneNumber} key={index} />))}
    </div>
  )
}

export default ListContacts;
