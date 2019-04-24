// Module dependencies
import React, { Component } from 'react';

// Project dependencies
/// Components
import Navbar from './components/Navbar';
import FormField from './components/FormField';

// App
class App extends Component {
  render() {
    return (
      <main>
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </main>
    )
  }
}

// Export
export default App;