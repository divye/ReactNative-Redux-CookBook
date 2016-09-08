import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({},{
  [types.SET_SEARCHED_RECIPES](state, action) {
    let newState = {};
    //grab the array and store it as a hashmap
    action.recipes.forEach((recipe) => {
      newState[recipe.id] = recipe
    });
    return newState;
  }
});

//giving the initial values and then increasing the value on each action
export const recipeCount = createReducer(0, {
  [types.SET_SEARCHED_RECIPES](state,action){
    return action.recipes.length
  }
});
