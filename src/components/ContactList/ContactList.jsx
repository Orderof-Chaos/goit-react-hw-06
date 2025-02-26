import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contactsList = useSelector((state) => state.contacts.contacts.items);
  const filter = useSelector((state) => state.filters.filters.name) || ""; 

  const contacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  if (contacts.length === 0) {
    return <p>Contact list is empty</p>;
  }

  return (
    <div className={s.contactsList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contactItem={contact} />
      ))}
    </div>
  );
};

export default ContactList;