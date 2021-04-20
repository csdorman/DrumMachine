

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
    handleClick() {
        console.log("The click happened here")
    }
    render() {
        return(
            <div 
                class='drum-pad'
                onClick={this.handleClick.bind(this)}
                >
            </div>
        )
    }
}

//Drum-pad component
//! This should assign the  drum sounds and create layout.
class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log("Drum is hit")
        this.props.handleChange(e.target.value)
    }
    render() {
        return(
            <div>
                <div id='row1'>
                    <Drum 
                        value='Drum 1'
                        onClick={this.handleClick}/>
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
    handleChange = () => {
        //this.setState({drum: drum})
        console.log("Drum hit")
    }
    render() {
        return(
            <div id='drum-machine'>
                <h1>App Title</h1>
                <div>
                    <DrumPadDisplay 
                        text={this.state.drum}
                        //! This may need an onChange 
                        />
                </div>
                <div>
                    <DrumPad 
                        drum={this.state.drum}
                        onClick={this.handleChange}
                        />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));