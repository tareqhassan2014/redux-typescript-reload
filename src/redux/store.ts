import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(ReduxThunk);
export const store = createStore(
    persistedReducer,
    composeWithDevTools(middleware)
);
export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;
