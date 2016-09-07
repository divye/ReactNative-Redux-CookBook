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
    this.state = { recipeCount: 0 }
  }
  incrementRecipeCount(){
    this.setState({recipeCount: this.state.recipeCount+1});
  }
  render(){
    return <View>
      <Text style={{marginTop: 20}}>
        App container
      </Text>
      <TouchableHighlight onPress={() => {this.incrementRecipeCount()}}>
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
export default connect(() => { return {}}, mapDispatchToProps)(AppContainer);
