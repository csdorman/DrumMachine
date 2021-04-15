


//Drum-pad component
//! This should create the individual buttons for the drum sounds.
//! This should also handle the logic of mapping sounds/key identifiers to specific buttons

// Top-level app
//! This should contain the <Drum pad> component
//! This should contain the <Drum Display> component
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h1>App Title</h1>
                <div>
                    <h2>Drum Pad Buttons</h2>
                </div>
                <div>
                    <h2>Drum Pad Display</h2>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));