import React from 'react';
import './index.css';

class Weather extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            temperature: 0,
            temperatureUnit: '',
            detailedForecast: '',
        }
    }

    render(){
        return(
            <div className ="card">
                <h2>{this.props.name}</h2>
                <h4>{this.props.temperature}{this.props.temperatureUnit}</h4>
                <p>{this.props.detailedForecast}</p>
            </div>
        )
    }
        
}

export default Weather;
