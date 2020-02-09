import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './i18n';
import 'semantic-ui-css/semantic.min.css';
import Loading from './components/Loader';
import { Router } from 'react-router-dom';
import { I18nextProvider } from '../node_modules/react-i18next/src/I18nextProvider';
import history from './history';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Router history={history}>
      <Suspense fallback={Loading}>
        <App />
      </Suspense>
    </Router>
  </I18nextProvider>,
  document.getElementById('root')
);
