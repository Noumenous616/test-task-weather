import React from "react";
import Weather from "./Components/weather-info";
import Info from "./Components/Info";
import './App.css'
import Modal from "./Components/modal";
import Preloader from "./common/Preloader";



const API_KEY = '35adf859203f4108bd1bebbb1527d1f7';



class App extends React.Component {



    state = {
        city_name: undefined,
        country_code: undefined,
        temp: undefined,
        wind_spd: undefined,
        wind_cdir_full: undefined,
        error: undefined,
        isFetching: false
    }


    getWeather = async (e) => {

        e.preventDefault();
        const lat = e.target.elements.lat.value;
        const lon = e.target.elements.lon.value;


        if (lat,lon) {
            const api_url = await
                fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}`);
            const data = await api_url.json();
            this.setState({

                city_name: data.data[0].city_name,
                country_code: data.data[0].country_code,
                temp: data.data[0].temp,
                windSpd: data.data[0].wind_spd,
                windCdir: data.data[0].wind_cdir_full,
                error: undefined,
                isFetching: !this.state.isFetching

            });
        } else {
            this.setState({
                city_name: undefined,
                country_code: undefined,
                temp: undefined,
                wind_spd:undefined,
                wind_cdir_full: undefined,
                error: 'Введите геоданные!'
            });
        }
    }






    render() {
        return<>

            {this.state.isFetching ? <Preloader/> : null}



            <div className='App'>

                <div className='Info'>
                    <Info />
                </div>

                <div className='Modal'>
                    <Modal getWeather={this.getWeather}
                           isFetching={this.state.isFetching}
                           />
                </div>

                <div className='Weather'>
                    <Weather className='Weather'
                             city_name={this.state.city_name}
                             country_code={this.state.country_code}
                             temp={this.state.temp}
                             wind_spd={this.state.windSpd}
                             wind_cdir_full={this.state.windCdir}
                             error={this.state.error}/>
                </div>



            </div>
         </>
    }

}


export default  App;
