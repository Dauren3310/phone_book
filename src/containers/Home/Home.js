import { useEffect } from 'react';
import {  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from '../../components/CardsList/CardsList';
import { fetchContacts } from '../../store/actions/actions';


const Home = () => {

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='container'>
      <CardsList 
        contacts={contacts}
      />
    </div>
  );
};

export default Home;
