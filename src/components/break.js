import React from 'react';

const Break = props => {
    return (
        <div className='timerBreak'>
            <h2>Break</h2>
            <div className='flex'>
                <button className='plusMinus' onClick={props.breakMinusMinute} >-</button>
                <p>{props.break /60}</p>
                <button className='plusMinus' onClick={props.breakAddMinute} >+</button>
            </div>
        </div>
    )
    
}

export default Break;