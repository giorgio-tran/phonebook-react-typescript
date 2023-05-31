import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactsContext";

const ListContacts = () => {
  const { contacts } = useContext(ContactsContext);

  return (
    <div>
      {contacts.map((contact) => (<li>{contact.name}</li>))}
    </div>
  )
}

export default ListContacts;
