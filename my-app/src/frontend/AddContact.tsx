import { useState } from "react"
import { ContactType, People } from "../MainApp"

type AddContactProps = {
  contacts: ContactType,
  setContacts: React.Dispatch<React.SetStateAction<People[]>>
}

const AddContact = ({ contacts, setContacts }: AddContactProps) => {
  const [name, setName] = useState<string>("")
  const [number, setNumber] = useState<string>("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log({
        name: name,
        number: number
      }, "test")}}

    >
      <input 
        value={name}
        type="text"
        onChange={(e) => {setName(e.target.value)}}
        placeholder="enter name..."
      />
      <input
        value={number}
        type="text"
        onChange={(e) => {setNumber(e.target.value)}}
        placeholder="enter number..."
      />
      <button type="submit">
        Enter
      </button>
    </form>
  )
}

export default AddContact;
