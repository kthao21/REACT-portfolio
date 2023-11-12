import { useState } from 'react';
import '../components/style.css';
export default function Contact() {

//creating state variables for the fields
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");


const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  //setting the state based on input type
  if (inputType === 'firstName') {
    setFirstName(inputValue);
  } else if (inputType === 'lastName') {
    setLastName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else {
    setMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {
  e.preventDafault();
  alert("Your message has been successfully delivered!")
  setFirstName('');
  setLastName('');
  setEmail('');
  setMessage('');
};

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
        value={firstName}
        onChange={handleInputChange}
        type="text"
        placeholder="First Name"
        />
        <input
        value={lastName}
        onChange={handleInputChange}
        type="text"
        placeholder="Last Name"
        />
        <input
        value={email}
        onChange={handleInputChange}
        type="text"
        placeholder="Email"
        />
        <input
        value={message}
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Message Here"
        id="messageBox"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
