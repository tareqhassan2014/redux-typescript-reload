import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import { persistor, store } from './redux/store';

ReactDOM.render(
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <App />
        </Provider>
    </PersistGate>,
    document.getElementById('root')
);
