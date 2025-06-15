import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import categoriesReducer from './categoriesSlice';

import {
    persistStore,
    persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
});

// persiste les states dans la whitelist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);