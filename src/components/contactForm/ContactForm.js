import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactOperations from '../../redux/operations';
import shortid from 'shortid';
import { ImCheckmark } from "react-icons/im";
import {  toast } from 'react-toastify';
import s from "./ContactForm.module.css";

function ContactForm() {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const nameInputId = shortid.generate();
  const phoneNumberInputId = shortid.generate();

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = () => {
    //event.preventDefault();
    console.log(name, number)
    if (name === '') {
      toast.warn("Please enter the contact's name!");
      return;
    }

    if (number === '') {
      toast.warn("Please enter the contact's phone number!");
      return;
    }

    dispatch(contactOperations.addContact(name, number));
    reset();
    };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
          <form onSubmit = {handleSubmit}>
            <label  htmlFor={nameInputId} className={s.label}>
            Name
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange = {handleInputChange}
            required
            id={nameInputId}
            autoComplete = "off"
          />
           </label>
                
            <label htmlFor={phoneNumberInputId} className={s.label} >
            Number 
            <input
            type="tel"
            name="number"
            className={s.input}
            value={number}
            onChange = {handleInputChange}
            required
            id={phoneNumberInputId}
            autoComplete = "off"
        />       
           </label>
                
          <button
          className={s.button}
          type="submit"
          disabled={name === '' || number === ''}
          >
            Add contact  <ImCheckmark color="rgb(11, 100, 11)" size="30px"/>
          </button>
        </form>
        )
}

export default ContactForm;