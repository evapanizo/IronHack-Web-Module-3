// Module dependencies
import React, { Component } from 'react';
import listOfContacts from './data/contacts.json';

// Project dependencies
/// Components
import Table from './components/Table';

// App
class App extends Component {

  state = {
    contacts: listOfContacts.slice(0,5)
  }

  render() {
    const {contacts} = this.state;
    return (
      <main>
        <h1>IronContacts</h1>
        <button className='btn'>Add Random Contact</button>
        <Table contacts={contacts}/>
      </main>
    )
  }
}

// Export
export default App;