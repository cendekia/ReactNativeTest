var React = require('react-native')

var {
  DatePickerIOS,
  StyleSheet,
} = React

var styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class DatePicker extends React.Component{
  constructor(props){
    this.state = {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    }
  }
  render() {
    return (
      <DatePickerIOS
        date={this.state.date}
        mode="datetime"
        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}/>
    )
  }
}

module.exports = DatePicker