import { useState } from "react"

const AddContact = () => {
  const [name, setName] = useState<string>("")
  const [number, setNumber] = useState<string>("")

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({
      name: name,
      number: number
    })
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
