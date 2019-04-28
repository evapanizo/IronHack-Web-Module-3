// Module dependencies
import React, { Component } from 'react';
import listOfFoods from './data/foods.json';

// Project dependencies
/// Components
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';

// App
class App extends Component {

  state = {
    foods: listOfFoods,
    isForm: false
  }

  handleClickAdd = () => {
    this.setState({
      isForm: !this.state.isForm
    })
  }

  handleAddNewFood = newFood => {
    const {foods}  = this.state;
    foods.push(newFood);
    this.setState({
      foods: foods,
      isForm: !this.state.isForm
    })
  }

  render() { 
    const {handleClickAdd, handleAddNewFood} = this;
    const {isForm, foods} = this.state;
    return (
      <main>
        <h1 className="title is-2">IronNutrition</h1>
        <button className="btn is-info" onClick={handleClickAdd}>Add New Food</button>
        {isForm ? <FoodForm handleAddNewFood={handleAddNewFood}/> : null}
        {foods.map((food, index) => <FoodBox key={index} food={food}/>)}
      </main>
    )
  }
}

// Export
export default App;