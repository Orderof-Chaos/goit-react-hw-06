import { toggleFormVisibility } from "../redux/visibleSlice";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const contactsList = useSelector((state) => state.contacts.contacts.items);
  const isFormVisible = useSelector((state) => state.visible.isFormVisible);
  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(toggleFormVisibility());
  };

  return (
    <div className="appStyle">
      <h1>Phone book</h1>
      {contactsList.length > 1 && <SearchBox />}
      {isFormVisible ? (
        <ContactForm closeForm={toggleForm} />
      ) : (
        <button className="toggleFormBtn" onClick={toggleForm}>
          add contact
        </button>
      )}
      <ContactList closeForm={toggleForm} />
    </div>
  );
};

export default App;