var React = require('react-native')

var {
  View,
  Image,
  StyleSheet,
} = React

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 100,
    alignSelf: 'center'
  }
})

class Images extends React.Component{
  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
      </View>
    )
  }
}

module.exports = Images