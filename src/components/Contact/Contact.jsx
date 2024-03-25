import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ data: { id, name, number } }) {
    const dispatch = useDispatch();

    return (
        <div className={css.wrap}>
            <div className={css.contact}>
                <div className={css.name}>
                    <FaUser />
                    <p>{name}</p>
                </div>
                <div className={css.phone}>
                    <FaPhoneAlt />
                    <p>{number}</p>
                </div>
            </div>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    );
}
