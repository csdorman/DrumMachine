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
      this.state = {drum: ''}
      //this.handleClick = this.handleClick.bind(this)
    }
    // handleClick(e) {
    //   console.log("Console log {e.target.value}");
    // }
    render(){
      const drum = this.state.drum
      return(
        <div
          id='drum-machine'>
          <h1>Drum Machine</h1>
          <DrumDisplay />
          <div id="row1">
            <DrumPad 
              value="Tom one"
              // onClick={this.handleClick}
              />
            <DrumPad 
              value="Tome two"
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
  
  class DrumDisplay extends React.Component {
    constructor(props) {
      super(props)
      this.state={value: displayPlaceholder}
    }
    render(){
      return(
        <div
          id='display'>
          //TODO Update this with drum name on click
          {this.state.value}
          </div>)
    }
  }

  const displayPlaceholder = <h2>Drum Machine Display</h2>
  
  class DrumPad extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
      console.log("The {this.props.value} was hit")
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
  