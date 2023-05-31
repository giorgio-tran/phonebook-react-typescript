import { PeopleType } from "../../MainApp";

const Contact = ({ name, phoneNumber }: PeopleType) => {

  return (
    <div className='text-and-box'>
    <div>
      <div className='person-name'> {name} </div>
      <div className='person-number'> {phoneNumber} </div>
    </div>
    <div className='delete-and-gap'>
      <button className='delete' onClick={() => {console.log("delete:", name)}}>
        <div>&#215;</div>
      </button>
      <div className='delete-gap'></div>
    </div>
  </div>
  )
}

export default Contact;
