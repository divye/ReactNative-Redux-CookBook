import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions';

class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  addRecipe(){
    this.props.addRecipe();
  }
  render(){
    return <View>
      <Text style={{marginTop: 20}}>
        App container Recipe Count: {this.props.recipeCount}
      </Text>
      <TouchableHighlight onPress={() => {this.addRecipe()}}>
        <Text>Add Recipes</Text>
      </TouchableHighlight>
    </View>
  }
}
//Used to send the actions (or dispatching actions)to the entire application
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators,dispatch);
}
//connect takes in two functions and wires all the dispatchinga actions
//state object is the global state of the application
export default connect((state) => { return {
  recipeCount: state.recipeCount
}}, mapDispatchToProps)(AppContainer);
