import { ReactElement, createContext, useState } from "react";
import { PeopleType } from "../../MainApp";

export type ContactsContextType = {
   contacts: PeopleType[],
   setContacts: React.Dispatch<React.SetStateAction<PeopleType[]>>,
}

const initState: PeopleType[] = [
  {
    "name": "jack",
    "phoneNumber": "8082222222"
  },
  {
    "name": "zoe",
    "phoneNumber": "8084222222"
  }
]

const initContextState: ContactsContextType = { 
  contacts: [],
  setContacts: () => null,
};

export const ContactsContext = createContext<ContactsContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[]
}

export const ContactsProvider = ({ children }: ChildrenType): ReactElement => {
  const [contacts, setContacts] = useState<PeopleType[]>(initState);

  return (
    <ContactsContext.Provider value={{contacts, setContacts}}>
      {children}
    </ContactsContext.Provider>
  )
}