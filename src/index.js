// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { store } from './redux/store'
// import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>

//     <App />
//   </Provider>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
