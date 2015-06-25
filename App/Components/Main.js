var React = require('react-native')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
})

class Main extends React.Component{
  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0){
      obj.backgroundColor = '#48BBEC'
    }

    return obj
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={this.makeBackground(0)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>Button</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Main