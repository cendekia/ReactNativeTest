var React = require('react-native')

var {
  ActivityIndicatorIOS,
  StyleSheet,
  View,
} = React

var styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class ActivityIndicator extends React.Component{
  render() {
    return (
      <ActivityIndicatorIOS
        animating="true"
        style={[styles.centering, {height: 80}]}
        size="large"
        color="red"/>
    )
  }
}

module.exports = ActivityIndicator