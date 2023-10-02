import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { persistedContactsReducer } from './reducer';
import { persistStore } from 'redux-persist';

const enhancer = devToolsEnhancer();

export const store = createStore(persistedContactsReducer, enhancer);
export const persistor = persistStore(store);
