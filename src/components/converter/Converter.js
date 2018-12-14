import React from 'react';
import romanMap from '../../utils/roman-map';
import './Converter.css';


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
        <div className="converter-container">
            <h1> Roman numeral converter</h1>
            <h2>Only numbers from 1 to 3999 are allowed</h2>
            <input className="converter-input" type="number" 
                value={this.state.inputValue}
                onChange={this.setNumber.bind(this)}
            />
            <div>
                <h1>
                    {this.state.finalResult}
                </h1>
            </div>
        </div>
      );  
    }  
  }
