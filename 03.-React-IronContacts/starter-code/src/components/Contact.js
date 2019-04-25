// Module dependencies
import React, { Component } from 'react';

// Contact
class Contact extends Component {

  render() { 
    const {name, picture, popularity} = this.props
    return (
      <tr>
        <td><img src={picture} alt={name} className='contact-img'/></td>
        <td>{name}</td> 
        <td>{popularity}</td>
      </tr>
    )
  }
}

// Export
export default Contact;
