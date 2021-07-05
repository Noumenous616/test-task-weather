import React, {useEffect, useState} from "react";
import './modal.css'


let Modal = (props) => {
    const [active, setActive] = useState(true);


    useEffect(() => {
        setActive(false)

    }, [])

    return <div className='modalBox'>

        <button onClick={() => setActive(true)}> Settings</button>


        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}
             onSubmit={props.getWeather}>

            <div className='modalContent' onClick={e => e.stopPropagation()}>
                <form onSubmit={props.getWeather}>
                    <div><input type='text' name='lat' placeholder='Enter Latitude'/></div>
                    <div><input type='text' name='lon' placeholder='Enter Longitude'/></div>


                    <div>
                        <button className={active ? 'btn active' : 'btn'} onClick={() => setActive(false)}
                                onSubmit={props.getWeather}>Save
                        </button>
                        <button type="button" onClick={() => setActive(false)} >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


}

export default Modal;
