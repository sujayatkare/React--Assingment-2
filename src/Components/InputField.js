import React from 'react';
import Validation from './Validation';
import CharComponent from './CharComponent';

class InputField extends React.Component {

    state = {
        name : ''
    };

    // onFormSubmit = () => {
    //     const value = this.setState({ value : this.state.name});

    //     if (value.length === '') {
    //         return <div> Please enter name</div>
    //     }
    //     return value;
    // }

    deleteCharacter = (index) => {
        const newname = [...this.state.name.split("")];
        newname.splice(index,1);
        this.setState({name : newname.join("")});
    }

    render() {
        return (
            <div>
                <input 
                        type = "text"
                        onChange = { (event) => this.setState({name : event.target.value}) }
                        value = {this.state.name}  />
                <br />
                <Validation name = {this.state.name.length}/>
                <div>
                    {this.state.name.split("").map((char,index) => {
                        return <CharComponent char = {char} 
                                              delete = { () => this.deleteCharacter(index)} />
                    })}
                </div>
            </div>
        );
    };
}

export default InputField;
