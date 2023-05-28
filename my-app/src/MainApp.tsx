import { useEffect, useState } from "react";
import AddContact from "./frontend/AddContact";

export type People = {
  name: string,
  phoneNumber: string
}

export type ContactType = People[]

const MainApp = () => {
  const peopleList = [
    {
      name: "Jack",
      phoneNumber: "8082222222"
    },
    {
      name: "Jeffrey",
      phoneNumber: "8089999999"
    }
  ]

  const [contacts, setContacts] = useState<People[]>([])

  useEffect(() => {
    setContacts(peopleList);
  }, []);

  return (
    <div className="parent-container">
      <div className="container">
        <AddContact contacts={contacts} setContacts={setContacts} />
      </div>
    </div>
  )
}

export default MainApp;
