import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    phone: "",
  };
  const onlyLaters = /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\s]+$/;
  const phoneValidation = /^\+?\d{9,15}$/;
  const applySchema = Yup.object().shape({
        name: Yup.string()
            .required("this field is required")
            .min(3, "at least 3 symbols")
            .max(25, "no more than 25 characters")
            .matches(onlyLaters, "only laters!"),
        phone: Yup.string()
            .matches(phoneValidation, "wrong phone number")
            .required("this field is required"),
  });
    
  const handleSubmit = (values, actions) => {
    
    const isCopy = contacts.some(
      (contact) =>
        contact.name.toLowerCase().trim() ===
          values.name.toLowerCase().trim() && contact.phone === values.phone
    );

      if (isCopy) {
          actions.setSubmitting(false);
          return;
      }
    const newContact = {
      name: values.name,
      phone: values.phone,
      id: crypto.randomUUID(),
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={applySchema}
    >
      <Form>
        <div className={s.formStyle}>
          <label className={s.labelText}>
            <p>Name</p>
            <Field type="text" name="name" placeholder="Enter name" />
            <ErrorMessage
              className={s.errorMessage}
              name="name"
              component="p"
            />
          </label>
          <label className={s.labelText}>
            <p>Phone</p>
            <Field
              type="text"
              name="phone"
              placeholder="enter phone number"
            />
            <ErrorMessage
              className={s.errorMessage}
              name="phone"
              component="p"
            />
          </label>
          <button className={s.submitBtn} type="submit">
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;