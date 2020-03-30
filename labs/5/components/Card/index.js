import React from 'react'
import Weather from '../Weather/index.js';
import './index.css'

class Card extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            periods : []
        }
    }

    componentDidMount(){
        fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
        .then(res => res.json())
        .then((result) => {

            this.setState({
                periods: result.properties.periods
            });
        })
    }

    render(){
        return(
            <div className = "card">
            {this.state.periods
            .map((v) => <Weather key = {v.number}
            name = {v.name}
            temperature = {v.temperature}
            temperatureUnit = {v.temperatureUnit}
            detailedForecast = {v.detailedForecast}
            />)}
            </div>
        )
    }
}

export default Card;
