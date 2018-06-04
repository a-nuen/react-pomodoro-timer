import React from 'react';

const Display = props => {
    let seconds = props.display;
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    let display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    let resumePause = props.pauseResume === 'Pause' ? props.pause : props.resume;
    return(
        <div className='display'>
            <p>{display}</p>
            <button onClick={props.reset} >Reset</button>
            {props.startClicked && <button onClick={resumePause} >{props.pauseResume}</button>}
            {!props.startClicked && <button onClick={props.start}>Start</button>}
        </div>
    )
}

export default Display;