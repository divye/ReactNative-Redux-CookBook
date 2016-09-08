import * as types from './types';
import Api from '../lib/api';

export function fetchRecipes(ingredients){
  return (dispatch, getState) => {
    const params = [
      `ingredients=${encodeURIComponent(ingredients)}`,
      'fillIngredients=false',
      'limitLicense=false',
      'number=20',
      'ranking=1'
    ].join('&');
    return Api.get(`/recipes/findByIngredients?${params}`).then(resp => {
      dispatch(setSearchedRecipes({recipes: resp}));
        }).catch( (ex) => {
      console.log(ex);
    });
  }
}
//function to save the searched recipes
export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes,
  }
}
