// Module dependencies
import React, { Component } from 'react';
import listOfFoods from './data/foods.json';

// Project dependencies
/// Components
import FoodBox from './components/FoodBox';

// App
class App extends Component {

  render() { 
    return (
      <main>
        {listOfFoods.map((food, index) => <FoodBox key={index} food={food}/>)}
      </main>
    )
  }
}

// Export
export default App;