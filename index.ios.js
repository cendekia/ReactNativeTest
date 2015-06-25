var React = require('react-native')
var Main = require('./App/Components/Main')


var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000'
  },
});

class ReactNTest extends React.Component{
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'React Native Test',
          component: Main
        }} />
    );
  }
};

AppRegistry.registerComponent('ReactNTest', () => ReactNTest)