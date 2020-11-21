import React from 'react';

let ComponentC = (props) => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <p className="h2">Component C</p>
                                <pre>{JSON.stringify(props.Data)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ComponentC;