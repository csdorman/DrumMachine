


//Drum-pad Display
//!This is the display component for the Drum-pad
class DrumPadDisplay extends React.Component {
    render() {
        const drumHit = this.props.drum
        return(
            <div id='display'>
                <h2>Drum: {drumHit}</h2>
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
                key={this.props.pos}
                className='drum-pad'
                >
            </div>
        )
    }
}

//Drum-pad component
//! This should assign the  drum sounds and create layout.
class DrumPad extends React.Component {
    render() {
        let drumRows = []
    this.props.drumpad.forEach((drum) => {
        if (drum.pos < 3) {
                drumRows.push(
                    <Drum
                        id={drum.id}
                        key={drum.pos}
                    />
                )
            } else if (drum.pos < 6) {
                drumRows.push(
                    <Drum 
                        id={drum.id}
                        key={drum.pos}
                    />
                )
            } else {
                drumRows.push(
                    <Drum
                        id={drum.id}
                        key={drum.pos}
                    />
                )
            }
        })  
        return(
            <div>
                {drumRows}
            </div>
            
        )
    }
}

//console.log(DrumPadData)
//console.log(drumpad)
//console.log(DRUMSOUNDS)

// Top-level app
//* This should contain the <DrumPad> and <DrumDisplay> 
class App extends React.Component {
    render() {
        return(
            <div id='drum-machine'>
                <h1>App Title</h1>
                <div>
                    <DrumPadDisplay 
                        />
                </div>
                <div>
                    <DrumPad 
                        drumpad={this.props.drums}
                        />
                </div>
            </div>
        )
    }
}

//Drum sounds/keys
const DRUMSOUNDS = [
{
    pos: 1,
    keycode: '',
    keyTrigger: '',
    id: 'Tom 1',
    url: '',
},
{
    pos: 2,
    keycode: '',
    keyTrigger: '',
    id: 'Tom 2',
    url: ''
},
{
    pos: 3,
    keycode: '',
    keyTrigger: '',
    id: 'Tom 3',
    url: ''
},
{
    pos: 4,
    keycode: '',
    keyTrigger: '',
    id: 'Bass',
    url: ''
},
{
    pos: 5,
    keycode: '',
    keyTrigger: '',
    id: 'Snare',
    url: ''
},
{
    pos: 6,
    keycode: '',
    keyTrigger: '',
    id: 'Cymbal',
    url: ''
},
{
    pos: 7,
    keycode: '',
    keyTrigger: '',
    id: 'Hi hat',
    url: ''
},
{
    pos: 8,
    keycode: '',
    keyTrigger: '',
    id: 'Cowbell',
    url: ''
},
{
    pos: 9,
    keycode: '',
    keyTrigger: '',
    id: 'Tambourine',
    url: ''
}
]

// Render app and define drum object
ReactDOM.render(<App drums={DRUMSOUNDS} />, document.getElementById('root'));