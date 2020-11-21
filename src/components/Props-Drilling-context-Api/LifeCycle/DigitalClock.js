import React, { useEffect, useState } from 'react';

let DigitalWatch = () => {

    let [currentTime , setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        let timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        } , 1000)

        return () => {
            // componentWillUnmount
            clearInterval(timer);
        };

    })
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <p className="h3">Digital Watch</p>
                            </div>
                            <div className="card-body bg-warning text-white">
                                <p className="h3">{currentTime}</p>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default DigitalWatch;