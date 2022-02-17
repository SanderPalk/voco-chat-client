// KASUTU FAIL PRAEGU!!!!!!!!

import React from 'react';
import { value1 } from './Name';
import { value2 } from './Input';



function Send() {
    let Name = value1.toString();

    var countName = String(Name).length;
    var countInput = String(value2).length;
    var maxName = 3;
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