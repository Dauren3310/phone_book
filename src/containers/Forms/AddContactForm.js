import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { createContact } from '../../store/actions/actions';

const AddContactForm = props => {

  const [inputValues, setInputValues] = useState({
    name: '',
    phone: '',
    email: '',
    photo: ''
  });
  
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const changeInputHandler = e => {
    const {name, value} = e.target;
    setInputValues(prevState => ({...prevState, [name]: value}));
  };

  const createNewContact = e => {
    e.preventDefault();
    dispatch(createContact(inputValues));
    props.history.push('/')
  }

  const backToContacts = () => props.history.push('/');


  const image = (
    <img
      style={{ width: '100%' }} 
      src={inputValues.photo} 
      alt="preview" 
    />
  );

  return (
    <div className='container'>
      {loading ? <Spinner /> : null} 
      <Form onSubmit={createNewContact}>
        <h3>Add new contact</h3>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={inputValues.name}
            onChange={changeInputHandler}
            name='name'
            required 
            size="sm" 
            type="text"  
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            value={inputValues.phone}
            onChange={changeInputHandler}
            name='phone'
            required 
            size="sm" 
            type="text"  
            placeholder="Enter phone"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={inputValues.email}
            onChange={changeInputHandler}
            name='email'
            required 
            size="sm" 
            type="text"  
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Photo</Form.Label>
          <Form.Control
            value={inputValues.photo}
            onChange={changeInputHandler}
            name='photo'
            required 
            size="sm" 
            type="text"  
            placeholder="Enter photo"
          />
        </Form.Group>

        <h5>Photo preview</h5>
        <div style={{ width: 200, minHeight: 200 }}>
          {inputValues.photo ? image : null}
        </div>

        <Button
          className='my-2 mr-2'
          type='submit' 
          variant="success"
        >
          Save
        </Button>
        
        <Button 
          className='my-2'
          variant="danger"
          onClick={backToContacts}
        >
          Back to contacts
        </Button>
          
      </Form>
    </div>
  );
};

export default AddContactForm;