import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store17';
import './App.css';
import CakeContainer14 from './components/CakeContainer14';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer14 />      
      </div>
    </Provider>
  );
}

export default App;
