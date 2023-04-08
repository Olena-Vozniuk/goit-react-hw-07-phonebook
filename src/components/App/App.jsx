import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import { Layout } from "components/Layout/Layout";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import ClipLoader from "react-spinners/ClipLoader";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      {!error && <div style={{ textAlign: "center"}}>
        <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
        <ContactList />
      </div>}
      {isLoading && !error && <ClipLoader
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      {error && <div style={{ height: "100vh", paddingTop: "50vh", fontSize: "45px"}}>Oops...Something went wrong</div>}
    </Layout>
  );
};