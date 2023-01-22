import { Component } from 'react';
import './App.css';
import Counter from './Counter';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';


class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'hot dog',
        ingredients: ['hot dog', 'bun', 'ketchup', 'mustard'],
        directions: ['grill hot dog', 'put in bun', 'add desired condiments'],
        picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png'
      },
      {
        id: 2,
        name: 'burger',
        ingredients: ['burger', 'bun', 'ketchup', 'mustard'],
        directions: ['grill burger', 'put in bun', 'add desired condiments'],
        picture: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80'
      }
    ],
    selectedRecipe: 0
  }

  // constructor(props) {
  //   super(props);

  //   //this.selectRecipe = this.selectRecipe.bind(this);
  // }

  selectRecipe(selectedRecipe) {
    //selectRecipe = () => {
    //console.log('select recipe called', selectedRecipe);

    //console.log(this);

    this.setState({
      selectedRecipe: selectedRecipe
    });
  }

  render() {
    const recipes = this.state.recipes.map((r, i) => <li key={r.id} onClick={/*this.selectRecipe*//*this.selectRecipe.bind(this, i)*/
      () => this.selectRecipe(i)}>{r.name}</li>);

    return (
      <div className="container text-center">
        <RecipeList recipes={this.state.recipes.selectRecipe} />

        <hr />
        <RecipeDetails recipe={this.state.recipes[this.state.selectedRecipe]} />
        <Counter />
      </div>
    );
  }
}

export default App;