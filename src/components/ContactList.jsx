import ContactItem from './ContactItem';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
