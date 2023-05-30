import { useState, useContext } from "react"
import { ContactsContext } from "./Contexts/ContactsContext"
import { PeopleType } from "../MainApp";

const AddContact = () => {
  const { contacts, setContacts } = useContext(ContactsContext);
  const [name, setName] = useState<string>("")
  const [number, setNumber] = useState<string>("")
  const temp: PeopleType[] = contacts;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    temp.push({
      name: name,
      phoneNumber: number
    })
    setContacts(temp);
    setName("");
    setNumber("");
    console.log(contacts);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input">
        <label htmlFor="name">Name</label>
        <input 
          value={name}
          id="name"
          type="text"
          onChange={(e) => {setName(e.target.value)}}
          placeholder="enter name..."
        />
      </div>
      <div className="input">
        <label htmlFor="number">Number</label>
        <input
          value={number}
          id="number"
          type="text"
          onChange={(e) => {setNumber(e.target.value)}}
          placeholder="enter number..."
        />
      </div>
      <button type="submit" className="add">
        Enter
      </button>
    </form>
  )
}

export default AddContact;
