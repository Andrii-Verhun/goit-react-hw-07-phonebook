import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { getFilterValue } from 'redux/selectors';


import { Contact } from './Contact/Contact';

import css from './ContactsList.module.css';

export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);

    const filteredContacts = useMemo(() => {
    return contacts.filter((el) => (el.name.toLowerCase().includes(filter.toLowerCase())));
  }, [contacts, filter]);

    return (
        <div className={css.wrapper}>
            <ul>
                {filteredContacts.map((el) => (
                    <Contact
                        key={el.id}
                        name={el.name}
                        number={el.number}
                        id={el.id}
                    />)
                )}
            </ul>
        </div>
    );
};