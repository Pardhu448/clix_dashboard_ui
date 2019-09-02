import React, { Component } from 'react'
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { ConfigStore } from './redux/configStore';

const store = ConfigStore;

class App extends Component {
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
      <div className='container'>
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }

}

export default App
