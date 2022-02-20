import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store24';
import './App.css';
import CakeContainer14 from './components/CakeContainer14';
import HooksCakeContainer20 from './components/HooksCakeContainer20';
import IceCreamContainer22 from './components/IceCreamContainer22';
import NewCakeContainer25 from './components/NewCakeContainer25';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer20 />

        <CakeContainer14 /> 

        <IceCreamContainer22 />
        <NewCakeContainer25 />   
      </div>
    </Provider>
  );
}

export default App;
