// import { useState } from 'react';
// import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';

export default function App() {
    const contacts = useSelector(selectContacts);

    return (
        <div>
            <div className={css.wrapPhoneBook}>
                <h1>PhoneBook</h1>
                <section className={css.section}>
                    <ContactForm />
                </section>
                <section className={css.section}>
                    <SearchBox />
                </section>
                <section className={css.section}>
                    {contacts.length ? <ContactList /> : <p>No contacts yet</p>}
                </section>
            </div>
        </div>
    );
}
