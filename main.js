//TODO: Give each drum a specific name
//TODO: Get name of drum when clicked

class DrumMachineApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        <DrumMachine />
      </div>
    )
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(value){
    this.setState({value})
  }
  render(){
    const drum = this.state.drum
    return(
      <div
        id='drum-machine'>
        <h1>Drum Machine</h1>
        <DrumDisplay
          onClick={this.handleClick}
        />
        <div id="row1">
          <DrumPad 
            value="Tom one"
            // onClick={this.handleClick}
            />
          <DrumPad 
            value="Tom two"
            />
          <DrumPad
            value="Tom three" 
            />
       </div>
        <div id="row2">
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </div>
        <div id="row3">
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </div>
      </div> 
    )
  }
}

          //TODO Update this with drum name on click
class DrumDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state={value: displayPlaceholder}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.props.handleChange(e.target.value)
  }
  render(){
    const drum = this.props.value
    return(
      <div id='display'>
          <h2>
            value={drum}
            onChange={this.handleChange} </h2>
        </div>
    )
  }
}

const displayPlaceholder = <h2>Drum Machine Display</h2>

class DrumPad extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log("The {value} was hit")
  }
  render(){
    const drum=this.props.value
    return(
    <span
      value={drum}
      onClick={this.handleClick}
      class="drum-pad">
      {drum}
      </span>)
  }
}

// function DrumPad(props) {
//   function handleClick(e){
//     console.log("Drum {drum} was hit")
//   }
//   return(
//     <span
//       class="drum-pad"
//       drum={props.drum}
//       onClick={handleClick}
//       />)
// }

//function define buttons here
ReactDOM.render(
  <DrumMachineApp />,
  document.getElementById("root"))