import React from 'react';

const Timer = props => (
	<div className='timerBreak'>
		<h2>Time</h2>
		<div className='flex'>
			<button className='plusMinus' onClick={props.timerMinusMinute} >-</button>
				<p>{props.timer /60}</p>
			<button className='plusMinus' onClick={props.timerAddMinute} >+</button>
		</div>
	</div>
)

export default Timer;