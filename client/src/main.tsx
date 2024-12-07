// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/Global/GlobalStyle.tsx';
import store from './store/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyles>
                {/* <React.StrictMode> */}
                <App />
                {/* </React.StrictMode> */}
            </GlobalStyles>
        </Provider>
    </BrowserRouter>,
);
