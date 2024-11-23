import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { MdDelete } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts); 

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.contactCard}>
          <div className={s.contact}>
            <span className={s.name}>
              <IoPerson /> {contact.name}:
            </span>
            <span className={s.number}>
              <RiPhoneFill /> {contact.number}
            </span>
          </div>
          <button
            className={s.btn}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            <MdDelete />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;