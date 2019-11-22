import React from 'react'
import spinnerGif from '../spinner.gif'

export const Spinner = () => {
    return (
        <div>
           <img src={spinnerGif} alt="Loading..."/>
        </div>
    )
}

export default Spinner;
