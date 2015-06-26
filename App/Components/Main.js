var React = require('react-native')
var ActivityIndicator = require('./ActivityIndicator')
var DatePicker = require('./DatePicker')
var Images = require('./Images')
var ListViews = require('./ListViews')

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
    }else if (btn === 1){
      obj.backgroundColor = '#E77AAE'
    }

    return obj
  }
  goToActivityIndicator(){
    this.props.navigator.push({
      component: ActivityIndicator,
      title: 'Activity Indicator',
    })
  }
  goToDatePicker(){
    this.props.navigator.push({
      component: DatePicker,
      title: 'Date Picker',
    })
  }
  goToImages(){
    this.props.navigator.push({
      component: Images,
      title: 'Image',
    })
  }
  goToListViews(){
    this.props.navigator.push({
      component: ListViews,
      title: 'List Views',
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
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToDatePicker.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>Date Picker</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToImages.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>Images</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToListViews.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}>List Views</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Main