import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth";
import layoutReducer from './layout';
import formReducer from './form'
// Define separate persist configs for each reducer
const authPersistConfig = {
  key: 'auth',
  storage: storage,
  // whitelist: ['/* specify which parts of the state you want to persist */'],
};

const layoutPersistConfig = {
  key: 'layout',
  storage: storage,
  // whitelist: ['/* specify which parts of the state you want to persist */'],
};

const formPersistConfig = {
  key: 'form',
  storage: storage,
  // whitelist: ['formData'], // Optional: specify which parts of the state to persist
};

// Wrap each reducer with persistReducer using the corresponding config
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistLayoutReducer = persistReducer(layoutPersistConfig, layoutReducer);
const persistedFormReducer = persistReducer(formPersistConfig, formReducer);

let rootReducer = {
  authReducer: persistedAuthReducer,
  layoutReducer: persistLayoutReducer,
  form: persistedFormReducer,
};

export default rootReducer;
