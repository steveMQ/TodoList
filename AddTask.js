'use strict'

var React = requite('react-native');

var {
  StyleSheet,
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create({

  description: {
    fontSize: 20,
    backgroundColor: 'white'
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

class AddTask extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Text style = {styles.description}>
          AddTask Tab
        </Text>
      </View>
    );
  }

}

module.exports = Search;
