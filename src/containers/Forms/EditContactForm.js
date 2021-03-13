import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editContact, showContact } from '../../store/actions/actions';

const EditContactForm = props => {

  const [inputValues, setInputValues] = useState({
    name: '',
    phone: '',
    email: '',
    photo: ''
  });
  
  const loading = useSelector(state => state.loading);
  const contactInfo = useSelector(state => state.contactInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showContact(props.match.params.id));
    setInputValues({...contactInfo});
  }, [dispatch]);

  const changeInputHandler = e => {
    const {name, value} = e.target;
    setInputValues(prevState => ({...prevState, [name]: value}));
  };

  const editContactHandler = e => {
    e.preventDefault();
    dispatch(editContact(inputValues));
    props.history.push('/');
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
      <Form onSubmit={editContactHandler}>
        <h3>Edit contact</h3>
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

export default EditContactForm;