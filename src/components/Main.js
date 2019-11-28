import React, { Component } from 'react';
import triangleCalculator from '../utils/triangleCalculator';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '' ,
            error: '',
            image: ''
        };

        this.formSubmit = this.formSubmit.bind(this);
    }
    
    formSubmit = (e) => {
        e.preventDefault();
        const a = parseFloat(e.target.sideA.value);
        const b = parseFloat(e.target.sideB.value);
        const c = parseFloat(e.target.sideC.value);
        const showResult = document.querySelector('#result');
        const showError = document.querySelector('#error');
        
        return new Promise((resolve, reject) => {
            if(isNaN(a) || isNaN(b) || isNaN(c)) {
                showResult.classList.remove('alert');
                showResult.classList.remove('alert-info'); 
                const error = 'One or more inputs are not a number';
                showError.classList.add('alert');
                showError.classList.add('alert-danger'); 
                this.setState({
                    result: '',
                    error: error,
                    image: ''
                });
                reject(console.log('wrong inputs'));
            } else {
                showError.classList.remove('alert');
                showError.classList.remove('alert-danger'); 
                const result = triangleCalculator(a, b, c);
                showResult.classList.add('alert');
                showResult.classList.add('alert-info'); 
            
                this.setState({
                    result: result.answer,
                    error: '',
                    image: result.image
                });
                resolve(console.log('here is the result'));
            }
            
        });
    };

    render() {  
        return (
            <main className="container d-flex justify-content-center flex-wrap pt-5">
                <form id="calculatorForm" className="w-75 d-flex justify-content-center flex-wrap" onSubmit={this.formSubmit}>
                    <fieldset className="form-group card p-3">
                        <label htmlFor="sideA" className="rounded bg-info p-1 pl-2 text-white">Side A:</label>
                        <input type="number" name="sideA" id="sideA" step="0.01" min="0" max="1000" placeholder="example: 10" className="form-control"></input>
                    </fieldset>
                    <fieldset className="form-group card p-3">
                        <label htmlFor="sideB" className="rounded bg-info p-1 pl-2 text-white">Side B:</label>
                        <input type="number" name="sideB" id="sideB" step="0.01" min="0" max="1000" placeholder="example: 20" className="form-control"></input>
                    </fieldset>
                    <fieldset className="form-group card p-3">
                        <label htmlFor="sideC" className="rounded bg-info p-1 pl-2 text-white">Side C:</label>
                        <input type="number" name="sideC" id="sideC" step="0.01" min="0" max="1000" placeholder="example: 30" className="form-control"></input>
                    </fieldset>
                    <button type="submit" className="mx-auto w-75 btn btn-dark">Calculate</button>
                </form>
                <p id="error" className="w-100 text-center mt-4">{this.state.error}</p>
                <p id="result" className="w-100 text-center mt-4">{this.state.result}</p>
                <img id="triangle" src={this.state.image} alt="" />
            </main>
        );
    };
};

export default Main;

