export const getContacts = state => state.contactsReducer.contacts.items;
export const getFilter = state => state.contactsReducer.searchStr;
export const getError = state => state.contactsReducer.contacts.error;
export const getIsLoading = state => state.contactsReducer.contacts.isLoading;
