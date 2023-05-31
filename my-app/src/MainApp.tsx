import AddContact from "./frontend/components/AddContact";
import ListContacts from "./frontend/components/ListContacts";
import Search from "./frontend/components/Search";
import { ContactsProvider } from "./frontend/contexts/ContactsContext";

export type PeopleType = {
  name: string,
  phoneNumber: string
}

export type ContactType = PeopleType[];

const MainApp = () => {
  return (
    <div className="parent-container">
      <div className="container">
        <ContactsProvider>
          <div>
            <Search />
            <AddContact />
          </div>
          <ListContacts />
        </ContactsProvider>
      </div>
    </div>
  )
}

export default MainApp;
