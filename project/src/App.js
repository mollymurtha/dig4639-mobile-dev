import React from 'react';
import Profile from './components/profile/index';
import AddContact from './components/contacts/add';
import RemoveContact from './components/contacts/remove';
import ViewContact from './components/contacts/view';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <body>
        <h2 className="head">Contacts App</h2>
        <div className="container">
          <ViewContact/>
          <br />
          <AddContact />
          <br />
          <Profile />
          <br />
          <RemoveContact />
          <br />
        </div>
      </body>
    );
  }
}

export default App;
