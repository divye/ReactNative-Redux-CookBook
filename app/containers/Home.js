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

  constructor(props) {
    super(props);
    this.state={ingredientsInput: ''}
  }
  searchPressed(){
    this.setState({searching: true});
    this.props.fetchRecipes(this.state.ingredientsInput).then( () => {
      this.setState({searching: false})
    })
  }

  recipes(){
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
  }

  render(){
    return <View style= {styles.container}>
      <View style = {styles.searchSection}>
        <TextInput style={styles.searchInput}
          returnKeyType='search'
          placeholder='Ingredients - Separated by commas'
          onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
          value={this.state.ingredientsInput}
        />
        <TouchableHighlight onPress={ () => this.searchPressed()} style={styles.searchButton}>
          <Text>Search Recipes</Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.scrollSection}>
        {!this.state.searching && this.recipes().map((recipe) => {
          return <View key={recipe.id}>
          <Image source={{uri:recipe.image}} style={styles.fetchedImage} />
          <Text style={styles.fetchedText}>{recipe.title}</Text>
          </View>
        })}
          {this.state.searching ? <Text>Searching...</Text> : null}
      </ScrollView>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  searchSection: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    flex: 1
  },
  scrollSection: {
    flex: 7
  },
  fetchedImage: {
    height: 150,
  },
  fetchedText: {
    backgroundColor: 'black',
    color: 'white',
    height: 20,
  },
  searchInput: {
    flex: 7
  },
  searchButton: {
    flex: 2
  }
})

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}
export default connect(mapStateToProps)(Home);
