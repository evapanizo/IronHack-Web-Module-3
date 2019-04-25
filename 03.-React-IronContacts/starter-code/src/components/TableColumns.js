// Module dependencies
import React, { Component } from 'react';

// Table Columns
class TableColumns extends Component {

  render() { 
    const {first, second, third} = this.props;
    return (
      <thead>
        <tr>
          <th>{first}</th>
          <th>{second}</th> 
          <th>{third}</th>
        </tr>
      </thead>
    )
  }
}

// Export
export default TableColumns;
