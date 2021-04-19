

//Drum-pad Display
//!This is the display component for the Drum-pad
class DrumPadDisplay extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div id='display'>
                <h2>Drum: {this.props.drum}</h2>
            </div>
        )
    }
}

//Drum
//! An individual drum component
class Drum extends React.Component {
    render() {
        return(
            <div 
                class='drum-pad'>
            </div>
        )
    }
}

//Drum-pad component
//! This should assign the  drum sounds and create layout.
class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.handleChange(e.target.drum)
    }
    render() {
        return(
            <div>
                <div id='row1'>
                    <Drum 
                        drum='Drum 1'
                        onChange={this.handleChange}/>
                    <Drum />
                    <Drum />
                </div>
                <div id='row2'>
                    <Drum />
                    <Drum />
                    <Drum />
                </div>
                <div id='row3'>
                    <Drum />
                    <Drum />
                    <Drum />
                </div>
            </div>
        )
    }
}

// Top-level app
//* This should contain the <DrumPad> and <DrumDisplay> 
class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {drum:''}
    }
    handleChange = (drum) => {
        this.setState({drum: drum})
    }
    render() {
        return(
            <div id='drum-machine'>
                <h1>App Title</h1>
                <div>
                    <DrumPadDisplay 
                        text={this.state.drum}/>
                </div>
                <div>
                    <DrumPad 
                        drum={this.state.drum}
                        onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));