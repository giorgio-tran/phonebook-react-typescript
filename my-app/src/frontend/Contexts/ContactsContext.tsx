import { createContext } from "react";
import { People } from "../../MainApp";

type ContactsContextType = People[] | React.Dispatch<React.SetStateAction<People[]>>;

export const ContactsContext = createContext<ContactsContextType>([]);