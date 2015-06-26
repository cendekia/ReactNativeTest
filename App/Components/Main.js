var React = require('react-native')
var ActivityIndicator = require('./ActivityIndicator')

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
  goToActivityIndicator(){
    this.props.navigator.push({
      component: ActivityIndicator,
      title: 'Activity Indicator',
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToActivityIndicator.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>Activity Indicator</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Main