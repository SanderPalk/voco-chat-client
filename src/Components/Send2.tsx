import React from 'react';
import { value1 } from './Name';
import { value2 } from './Input';


var countName = String(value1).length;
var countInput = String(value2).length;
var maxName = 3

function Send() {
    return (
        <button
            onClick={() => {
            if ( countName <= maxName ) { 
                alert("Username is too short! Try again.");} 
            else { alert("All good");}
            }}
        >Send</button>
    );
}

export default Send;
