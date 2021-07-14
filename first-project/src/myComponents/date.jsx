import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props){
return(
    <div>
        <h1>Current Time is:</h1>
        <h2>{props.date.toLocaleTimeString()}</h2>
    </div>
);
}
function Tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}
setInterval(Tick, 1000);
export default Tick;