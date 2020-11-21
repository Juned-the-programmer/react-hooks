import React, { useState } from 'react';

let HobbySelector = () => {

    let [hobbyselector , sethobbyselector ] = useState({
        Eating : false,
        Coding : false,
        Sleeping : false
    });

    let UpdateInput = (event) => {
        sethobbyselector({
            ...hobbyselector,
            [event.target.name] : event.target.checked
        })
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                HobbySelector
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <form action="">
                                            <div className="form-check">
                                                <input type="checkbox" name="Eating"
                                                onChange={UpdateInput}
                                                className="form-check-input" id="defaultCheck1"/>
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" name="Coding" 
                                                onChange={UpdateInput}
                                                id="defaultCheck2" className="form-check-input"/>
                                                <label htmlFor="defaultChec2" className="form-check-label">
                                                    Coding
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" name="Sleeping" 
                                                onChange={UpdateInput}
                                                id="defaultCheck3" className="form-check-input"/>
                                                <label htmlFor="defaultCheck3" className="form-check-label">
                                                    Sleeping
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-9">
                                        {
                                            hobbyselector.Coding ? 
                                            <React.Fragment>
                                                <div className="card animated jello mt-2">
                                                    <div className="card-body bg-success text-white">
                                                        <p className="h3">Coding</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                        {
                                            hobbyselector.Eating ?
                                            <React.Fragment>
                                                <div className="card mt-2">
                                                    <div className="card-body bg-primary text-white">
                                                        <p className="h3">Eating</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                        {
                                            hobbyselector.Sleeping ? 
                                            <React.Fragment>
                                                <div className="card mt-2">
                                                    <div className="card-body bg-warning text-white">
                                                        <p className="h3">Sleeping</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HobbySelector;