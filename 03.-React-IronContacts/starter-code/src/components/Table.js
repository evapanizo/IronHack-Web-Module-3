// Module dependencies
import React, { Component } from 'react';

// Project dependencies
/// Components
import Contact from './Contact';
import TableColumns from './TableColumns';

// Table
class Table extends Component {

  render() { 
    const {contacts, columns} = this.props
    return (
      <table>
        <TableColumns columns={columns}/>
        <tbody>
          {contacts.map( (contact, index) => 
            <Contact key={index}
                      name={contact.name}
                      picture={contact.pictureUrl}
                      popularity={Math.round(contact.popularity * 100) / 100}/>
          )}
        </tbody>
      </table>
    )
  }
}

// Export
export default Table;
