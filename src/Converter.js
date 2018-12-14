import React from 'react';
import romanMap from './utils/roman-map';


export default class Converter extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            romanString: ''
        }
    }
    
    getSimpleTraslation(number) {        
        let result = '';
        this.props.converter(number).forEach(element => {
            result += romanMap[element]            
        });
        return result;
    }

    setNumber(event) {
        const number = event.target.value;
        if(number === '' || (number>0 && number< 4000))  {
            this.setState({
                inputValue: number,
                finalResult: this.getSimpleTraslation(number)
            })
        } 
    }

    render() {
       return  (
        <div>
            <input type="number" 
                value={this.state.inputValue}
                onChange={this.setNumber.bind(this)}
            >            
            </input>
            {this.state.finalResult}
        </div>
      );  
    }  
  }
