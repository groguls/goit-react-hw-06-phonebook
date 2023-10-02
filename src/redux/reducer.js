import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return [action.payload, ...state];
    }
    case 'contacts/deleteContact': {
      return state.filter(contact => contact.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/filterContacts': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: 'contacts',
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  rootReducer
);
