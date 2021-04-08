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
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
      this.setState(console.log("The drum is {drum}"))
    }
    render(){
      const drum = this.state.drum
      return(
        <div
          id='drum-machine'>
          <h1>Drum Machine</h1>
          <DrumDisplay />
          <div id="row1">
            <DrumPad 
              id="Tom one"
              onClick={this.handleClick}/>
            <DrumPad />
            <DrumPad />
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
    }
    render(){
      return(
        <div
          id='display'>
          <h2>Drum Machine Display</h2>
          </div>)
    }
  }
  
  class DrumPad extends React.Component {
    constructor(props) {
      super(props)
      //this.props={}
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
      this.props.onClick(e.target.value)
      //console.log("The {this.props.drum} was hit")
    }
    render(){
      const drum=this.props.drum
      return(
      <span
        drum={drum}
        onClick={this.handleClick}
        class="drum-pad" />)
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
  