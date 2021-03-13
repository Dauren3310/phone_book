import { START_REQUEST, SET_CONTACTS, CREATE_CONTACT_SUCCESS } from "../actionTypes";

const initialState = {
  contacts: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST: 
      return {...state, loading: true};
    case SET_CONTACTS:
      return {...state, loading: false, contacts: action.contacts};
    case CREATE_CONTACT_SUCCESS:
      return {...state, loading: false, contacts: [...state.contacts, action.contact]};
    default:
      return state;    
  }
};

export default reducer;

