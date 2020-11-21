import React from 'react';
import ComponentTwo from './ComponentTwo';

let ComponentOne = () => {
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-primary text-white">
                                <p className="h3">Component One</p>
                                <ComponentTwo></ComponentTwo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ComponentOne;