import React from 'react';
import ComponentC from './ComponentC';

let ComponentB = (props) => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning text-white">
                                <p className="h2">Component B</p>
                                <pre>{JSON.stringify(props.Data)}</pre>
                                <ComponentC Data={props.Data}></ComponentC>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ComponentB;