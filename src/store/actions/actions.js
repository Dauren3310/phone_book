import axios from '../../axios';
import { START_REQUEST, CREATE_CONTACT_SUCCESS, SET_CONTACTS } from '../actionTypes';

const startRequest = () => {
  return {type: START_REQUEST};
};

export const createContact = contact => {
  return async dispatch => {
    try {
      dispatch(startRequest());
      const response = await axios.post('contacts.json', contact);
      console.log(response);
      const contactWithId = {...contact, id: response.data.name};
      dispatch({type: CREATE_CONTACT_SUCCESS, contact: contactWithId});
    } catch(e) {
      console.log(e);
    }
  }
}

export const fetchContacts = () => {
  return async dispatch => {
    try {
      dispatch(startRequest());
      const response = await axios.get('contacts.json');
      const contacts = Object.keys(response.data).map(id => ({...response.data[id], id}));
      dispatch({type: SET_CONTACTS, contacts});    
    } catch(e) {
      console.log(e);
    }
  }
}