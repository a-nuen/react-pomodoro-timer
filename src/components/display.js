import React from 'react';

class Display extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let seconds = this.props.display;
        let minutes = Math.floor(seconds / 60);
        let remainderSeconds = seconds % 60;
        let display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        let resumePause = this.props.pauseResume === 'Pause' ? this.props.pause : this.props.resume;
        return(
            <div className='display'>
                <p>{display}</p>
                <button onClick={this.props.reset} >Reset</button>
                {this.props.startClicked && <button onClick={resumePause} >{this.props.pauseResume}</button>}
                {!this.props.startClicked && <button onClick={this.props.start}>Start</button>}
            </div>
        )
    }
}

export default Display;