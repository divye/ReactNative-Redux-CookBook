import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions';
import Home from './Home'
class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  addRecipe(){
    this.props.addRecipe();
  }
  render(){
    return <Home {...this.props} />
  }
}
//Used to send the actions (or dispatching actions)to the entire application
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators,dispatch);
}
//connect takes in two functions and wires all the dispatchinga actions
//state object is the global state of the application
export default connect((state) => { return {
}}, mapDispatchToProps)(AppContainer);
