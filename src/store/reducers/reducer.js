import { START_REQUEST, SET_CONTACTS, CREATE_CONTACT_SUCCESS, SHOW_MODAL, SET_CONTACT_INFO } from "../actionTypes";

const initialState = {
  contacts: [],
  loading: false,
  contactInfo: {},
  showModal: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: 
      return {...state, showModal: action.value};
    case START_REQUEST: 
      return {...state, loading: true};
    case SET_CONTACT_INFO:
      return {...state, loading: false, contactInfo: action.contact};
    case SET_CONTACTS:
      return {...state, loading: false, contacts: action.contacts};
    case CREATE_CONTACT_SUCCESS:
      return {...state, loading: false, contacts: [...state.contacts, action.contact]};
    default:
      return state;    
  }
};

export default reducer;

