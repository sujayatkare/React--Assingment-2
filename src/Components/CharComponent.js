import React from 'react';

const CharComponent = (props) => {
    return (
        <div className = "CharComponent" onClick = {props.delete}>
            <input type ="text" style = {{ display : 'inline-block', 
                          padding : '16px', 
                          textAlign : 'center', 
                          margin : '16px', 
                          border : '1px solid black' }}
                    value = {props.char} />
         </div>
    )
};

export default CharComponent;
