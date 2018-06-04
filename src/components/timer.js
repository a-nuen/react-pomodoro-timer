import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='timerBreak'>
                <h2>Time</h2>
                <div className='flex'>
                    <button className='plusMinus' onClick={this.props.timerMinusMinute} >-</button>
                        <p>{this.props.timer /60}</p>
                    <button className='plusMinus' onClick={this.props.timerAddMinute} >+</button>
                </div>
            </div>
        )
    }
}

export default Timer;