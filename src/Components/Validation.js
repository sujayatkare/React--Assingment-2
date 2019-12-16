import React from 'react';

const Validation = (props) => {
    if (props.name === 0)
    {
        return <div> Enter The String</div>
    }
    else if (props.name < 5 ) {
        return <div>String to short</div>
    } 
    else if (props.name > 10) {
        return <div> String too long</div>
    }
    return <div>Length of String is : {props.name} </div>
}


export default Validation;
