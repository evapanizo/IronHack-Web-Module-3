// Module dependencies
import React, { Component } from 'react';
import listOfFoods from './data/foods.json';

// Project dependencies
/// Components
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import Search from './components/Search';

// App
class App extends Component {

  state = {
    foods: listOfFoods,
    isForm: false,
    searchValue: ''
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

  handleSearch = searchValue => {
    this.setState({
      searchValue: searchValue,
    })
  }

  renderFoods = (foodArray, searchValue) => {
    const filteredArray = foodArray.filter( food => {
      return food.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    return filteredArray.map((food, index) => <FoodBox key={index} food={food}/>)
  }

  render() { 
    const {handleClickAdd, handleAddNewFood, handleSearch, renderFoods} = this;
    const {isForm, foods, searchValue} = this.state;
    return (
      <main>
        <h1 className="title is-2">IronNutrition</h1>
        <button className="btn is-info" onClick={handleClickAdd}>Add New Food</button>
        {isForm ? <FoodForm handleAddNewFood={handleAddNewFood}/> : null}
        <Search handleSearch={handleSearch}/>
        {renderFoods(foods, searchValue)}
      </main>
    )
  }
}

// Export
export default App;