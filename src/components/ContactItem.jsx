const ContactItem = ({ contact, deleteContact }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={() => deleteContact(contact.id)}>Delete</button>
  </li>
);

export default ContactItem;
