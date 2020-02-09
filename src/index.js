import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './i18n';
import 'semantic-ui-css/semantic.min.css';
import Loading from './components/Loader';
import { BrowserRouter } from 'react-router-dom';
// import i18n from './i18n'; // initialized i18next instance
import {I18nextProvider} from '../node_modules/react-i18next/src/I18nextProvider';

ReactDOM.render((
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
      <Suspense fallback={Loading}>
        <App />
        </Suspense>
      </BrowserRouter>
    </I18nextProvider>
  ), document.getElementById('root')
);
