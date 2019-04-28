// Module dependencies
import React, { Component } from 'react';
import listOfContacts from './data/contacts.json';

// Project dependencies
/// Components
import Table from './components/Table';

// App
class App extends Component {

  state = {
    contacts: listOfContacts.slice(0,5),
    contactsList: listOfContacts.slice(5)
  }

  handleAddRandomClick = () => {
    const {contacts, contactsList} = this.state;
    const index = Math.floor(Math.random() * contactsList.length)
    contacts.push(contactsList[index])
    contactsList.splice(index,1);
    this.setState({
      contacts: contacts,
      contactsList: contactsList
    });
  }

  render() {
    const {contacts} = this.state;
    const {handleAddRandomClick} = this;
    return (
      <main>
        <h1>IronContacts</h1>
        <button className='btn' onClick={handleAddRandomClick}>Add Random Contact</button>
        <Table contacts={contacts}/>
      </main>
    )
  }
}

// Export
export default App;