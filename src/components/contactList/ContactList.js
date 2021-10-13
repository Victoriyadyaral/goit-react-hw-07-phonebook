import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import s from "./ContactList.module.css";

import { getVisibleContacts } from '../../redux/selectors';
import { isLoading } from '../../redux/selectors';
import ContactListItem from '../contactListItem/ContactListItem';
import Loader from '../Loader/Loader';

const ContactList = () => {

    const contacts = useSelector(getVisibleContacts);
    const loading = useSelector(isLoading);
    
    return (
        <ul className={s.contactList}>
             {loading && <Loader />}
            {contacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactList;