import axios from '../../axios';
import { START_REQUEST, CREATE_CONTACT_SUCCESS, SET_CONTACTS, SHOW_MODAL, SET_CONTACT_INFO } from '../actionTypes';

const startRequest = () => {
  return {type: START_REQUEST};
};

export const setShowModal = value => {
  return {type: SHOW_MODAL, value}
}

const setContactInfo = (contact) => {
  return {type: SET_CONTACT_INFO, contact}
}

export const createContact = contact => {
  return async dispatch => {
    try {
      dispatch(startRequest());
      const response = await axios.post('contacts.json', contact);
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

export const showContact = id => {
  return async dispatch => {
    try {
      dispatch(startRequest());
      const response = await axios.get(`contacts/${id}.json`);
      const contact = {...response.data, id}; 
      dispatch(setContactInfo(contact));    
    } catch(e) {
      console.log(e);
    }
  }
}

export const deleteContact = id => {
  return async dispatch => {
    try {
      dispatch(startRequest());
      const response = await axios.delete(`contacts/${id}.json`);
      dispatch(fetchContacts());
      dispatch(setShowModal(false));
    } catch(e) {
      console.log(e);
    }
  }
} 

export const editContact = contact => {
  return async dispatch => {
    try {
      dispatch(startRequest());
      const contactWithoutId = {...contact};
      delete contactWithoutId.id;
      const response = await axios.put(`contacts/${contact.id}.json`, contactWithoutId);
      dispatch(fetchContacts());
    } catch(e) {
      console.log(e);
    }
  }
}