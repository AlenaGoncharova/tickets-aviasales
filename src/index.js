import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
// import AviasalesService from './services/aviasales-service';
import DummyAviasalesService from './services/dummy-aviasales-service';
import { AviasalesServiceProvider } from './components/aviasales-service-context';

import store from './store';

// const aviasalesService = new AviasalesService();
const aviasalesService = new DummyAviasalesService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AviasalesServiceProvider value={aviasalesService}>
        <App></App>
      </AviasalesServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
