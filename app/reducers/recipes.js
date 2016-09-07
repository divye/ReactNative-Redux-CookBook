import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({},{});

//giving the initial values and then increasing the value on each action
export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state,action){
    return state + 1
  }
});
