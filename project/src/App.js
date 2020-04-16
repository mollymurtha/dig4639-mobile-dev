import React from 'react';
import Profile from './components/profile/index';
import AddContact from './components/contacts/add';
import RemoveContact from './components/contacts/remove';
import Contacts from './components/contacts/view';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <body>
        <h2 className="head">Contact List</h2>
        <div className="container">
          <Contacts/>
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
