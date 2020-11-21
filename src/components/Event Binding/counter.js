import React, { useState } from 'react';

let Counter = () => {

    let [counter , setcounter ] = useState(0);

    let UpdateInput = () => {
        setcounter(counter + 1);
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h3">Counter Class</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{counter}</p>
                                <button onClick={UpdateInput} className="btn btn-warning">Increase Counter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter;