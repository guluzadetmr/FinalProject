// import React from 'react'
// import Router from './Router/Router'

// const App = () => {
//   return (
//     <div>
//       <Router />
//     </div>
//   )
// }

// export default App
// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Router from './Router/Router';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;


