import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {connect} from 'react-redux'

class Home extends Component {

  searchPressed(){
    this.props.fetchRecipes('chicken,potato')
  }

  render(){
    return <View style= {{marginTop:20}}>
      <View>
        <TouchableHighlight onPress={ () => this.searchPressed()}>
          <Text>Search Recipes</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
      </ScrollView>
    </View>
  }

}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}
export default connect(mapStateToProps)(Home);
