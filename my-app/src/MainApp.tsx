import { useEffect, useState } from "react";
import AddContact from "./frontend/AddContact";
import { ContactsProvider } from "./frontend/Contexts/ContactsContext";

export type PeopleType = {
  name: string,
  phoneNumber: string
}

export type ContactType = PeopleType[];

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

  return (
    <div className="parent-container">
      <div className="container">
        <ContactsProvider>
          <div>
            <AddContact />
          </div>
        </ContactsProvider>
      </div>
    </div>
  )
}

export default MainApp;
