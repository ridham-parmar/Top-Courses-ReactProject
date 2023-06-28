import React from "react";
import "./Spinner.css" ;

const Spinner = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <div className='spinner'></div>
            <p className="">Loading....</p>
        </div>
    )
}

export default Spinner;