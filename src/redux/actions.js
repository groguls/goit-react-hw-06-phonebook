import { nanoid } from 'nanoid';

export const addContact = contactData => {
  const { name, number } = contactData;
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(), name, number },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const filterChange = value => {
  return {
    type: 'filter/filterContacts',
    payload: value,
  };
};
