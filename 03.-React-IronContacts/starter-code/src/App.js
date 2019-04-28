// Module dependencies
import React, { Component } from 'react';
import listOfContacts from './data/contacts.json';

// Project dependencies
/// Components
import Table from './components/Table';
import ButtonMenu from './components/ButtonMenu';

// App
class App extends Component {

  state = {
    contacts: listOfContacts.slice(0,5),
    contactsList: listOfContacts.slice(5)
  }

  handleState = newState => {
    const {contacts, contactsList} = newState;
    this.setState({
      contacts: contacts,
      contactsList: contactsList
    });
  }

  render() {
    const columns = ['Picture', 'Name', 'Popularity']
    const {contacts, contactsList} = this.state;
    const {handleState} = this;
    return (
      <main>
        <h1>IronContacts</h1>
        <ButtonMenu contacts={contacts} contactsList={contactsList} handleState={handleState}/>
        <Table contacts={contacts} columns={columns}/>
      </main>
    )
  }
}

// Export
export default App;