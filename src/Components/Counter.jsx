import React, { useState, useEffect } from 'react'
import '../Counter.css'
const Counter = () => {

    let Hour = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    
    const [dateState, setDateState] = useState(new Date());
        useEffect(() => {
               setInterval(() => setDateState(new Date()), 1000);
        }, []);
    
    return (
        <div id="countdown">
            <h2>Hora ARG</h2>
            <div className='labels'>
                <span className='NUm'>{Hour}              
                <li>Hours </li>
                </span>
                <span className='NUm'>{min}
                <li>Min</li>
                </span>
                <span className='NUm'>{sec}
                <li>Sec </li>
                </span>
            </div>
        </div>
    )
}

export default Counter