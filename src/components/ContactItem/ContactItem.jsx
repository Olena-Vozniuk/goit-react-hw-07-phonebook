import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { deleteContact } from "redux/operations";
import { Button, ContactWrapper } from "./ContactItem.styled";
import ClipLoader from "react-spinners/ClipLoader";
import { selectIsLoading } from "redux/selectors";


export const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const { id, name, phone } = contact;
    
    const handleDelete = () => {
        console.log(id);
        dispatch(deleteContact(id))
    };

    //  useEffect(handleDelete, [dispatch, id]);
    
    return (
        <ContactWrapper>
            <p>{name}: {phone}</p>
            <Button onClick={handleDelete}>{isLoading && <ClipLoader
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}Delete</Button>
        </ContactWrapper>
    )
    
}