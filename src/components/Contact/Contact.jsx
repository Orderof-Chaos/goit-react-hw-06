import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { name, phone } = contactItem;

  return (
    <div className={s.contactContainer}>
      <ul className={s.contactlist}>
        <li className={s.contactItem}>
          <FaUser className={s.contactImg} /> {name}
        </li>
        <li className={s.contactItem}>
          <BsFillTelephoneFill className={s.contactImg} /> {phone}
        </li>
      </ul>
      <button
        className={s.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(contactItem.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;