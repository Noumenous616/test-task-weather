import React from 'react';
import preloader from '../accets/preloader.gif';
import './preloader.css'

let Preloader = (props) => {
    return <div className='preloader'>
        <img src={preloader} />
    </div>

}



export default Preloader;
