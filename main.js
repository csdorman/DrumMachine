//TODO: Give each drum a specific name
//TODO: Get name of drum when clicked

//Drum sounds/keys
const drumSounds = [
  {
    keycode: '',
    keyTrigger: '',
    id: 'Tom 1',
    url: ''
  },
  {
    keycode: '',
    keyTrigger: '',
    id: 'Tom 2',
    url: ''
  },
  {
    keycode: '',
    keyTrigger: '',
    id: 'Tom 3',
    url: ''
  },
  {
    keycode: '',
    keyTrigger: '',
    id: 'Bass',
    url: ''
  },
  {
    keycode: '',
    keyTrigger: '',
    id: 'Snare',
    url: ''
  },
  {
    keycode: '',
    keyTrigger: '',
    id: 'Cymbal',
    url: ''
  },
  {
    keycode: '',
    keyTrigger: '',
    id: 'Hi hat',
    url: ''
  },
  {
    keycode: '',
    keyTrigger: '',
    id: 'Cowbell',
    url: ''
  },
  {
    keycode: '',
    keyTrigger: '',
    id: 'Tambourine',
    url: ''
  }
]

  //Drum machine display
  class DrumDisplay extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state={value: displayPlaceholder}
    }
    handleChange(e) {
      this.props.onChange(e.target.value)
    }
    render(){
      const drum = this.props.drum
      return(
        <div
          id='display'>
          {drum}
          </div>)
    }
  }

//Display placeholder text
  const displayPlaceholder = <h2>Drum Machine Display</h2>
  
  //Drum pad buttons
  class DrumPad extends React.Component {
    constructor(props) {
      super(props)
      this.onClick = this.onClick.bind(this)
    }
    render(){
      const drums = this.props.currentPad.map((drumObj, i, drumSoundsArr) => {
        return(
          <div 
            drumId={drumSoundsArr[i].id}
            > 

          </div>
        );
      })
      return(
        <div
          className='pad-bank'>
          {drums}
        </div>
      )
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

//Drum machine layout
  class DrumMachine extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentPad: drumSounds
      }
      //this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
      console.log({drum:value})
    }
    render(){
      const drum = this.state.drum
      return(
        <div
          id='drum-machine'>
          <h1>Drum Machine</h1>
          <DrumDisplay 
            value={drum}
          />
          <div id="row1">
            <DrumPad 
              value="Tom one"
              onClick={this.handleClick}
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

  //App container
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
  

  //Render
  ReactDOM.render(
    <DrumMachineApp />,
    document.getElementById("root"))
  