import { createContext, ReactNode, useState } from "react";
import { PeopleType } from "../../MainApp";

export type SearchContextType = {
  search: PeopleType[],
  setSearch: React.Dispatch<React.SetStateAction<PeopleType[]>>
}

const initState: PeopleType[] = [];

const initContextState: SearchContextType = {
  search: [],
  setSearch: () => null
}

export const SearchContext = createContext<SearchContextType>(initContextState);

type ChildrenType = {
  children?: ReactNode
}

export const SearchContextProvider = ({ children }: ChildrenType): ReactNode => {
  const [search, setSearch] = useState<PeopleType[]>(initState);

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      {children}
    </SearchContext.Provider>
  )
}
