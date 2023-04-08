import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import { ContactItem } from "components/ContactItem/ContactItem";
import { List, ListItem } from "./ContactList.styled";


export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    
   
    return (    
        <List>
            {contacts && contacts.map( contact => (
                <ListItem key={contact.id}>
                    <ContactItem contact={contact} />
                </ListItem>
            ))}        
        </List>
    );
};