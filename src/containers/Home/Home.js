import { useEffect } from 'react';
import {  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from '../../components/CardsList/CardsList';
import { setShowModal, fetchContacts, showContact, deleteContact } from '../../store/actions/actions';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

const Home = props => {

  const contacts = useSelector(state => state.contacts);
  const contactInfo = useSelector(state => state.contactInfo);
  const loading = useSelector(state => state.loading);
  const showModal = useSelector(state => state.showModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const closeModalHandler = () => {
   dispatch(setShowModal(false)); 
  }

  const showContactInfoHandler = id => {
    dispatch(setShowModal(true));
    dispatch(showContact(id));
  }

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  }

  const goToEditForm = id => {
    props.history.push(`/contacts/${id}/edit-contact`);
    dispatch(setShowModal(false)); 
  }

  return (
    <div className='container'>
      <Modal 
        show={showModal}
        close={closeModalHandler}
      >
        <ContactInfo
          contactInfo={contactInfo}
          deleteContact={deleteContactHandler}
          goToEditForm={goToEditForm}
        />
      </Modal>
      {loading ? <Spinner /> : null} 
      <CardsList 
        contacts={contacts}
        showContactInfo={showContactInfoHandler}
      />
    </div>
  );
};

export default Home;
