import { useEffect, useState } from "react";

interface People {
  name: string,
  phoneNumber: string
}

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
        
      </div>
    </div>
  )
}

export default MainApp;
