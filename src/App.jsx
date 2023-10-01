import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainComponent from './MainComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainComponent />
      </div>
    </Provider>
  );
}

export default App;

