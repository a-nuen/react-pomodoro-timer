import React from 'react';

class Break extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='timerBreak'>
                <h2>Break</h2>
                <div className='flex'>
                    <button className='plusMinus' onClick={this.props.breakMinusMinute} >-</button>
                    <p>{this.props.break /60}</p>
                    <button className='plusMinus' onClick={this.props.breakAddMinute} >+</button>
                </div>
            </div>
        )
    }
}

export default Break;