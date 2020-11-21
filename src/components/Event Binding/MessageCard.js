import React, { useState } from 'react';

let MessageCard = () => {

    let [ wishmessage , setwishmessage ] = useState('Hello')

    let saymorning = () => {
        setwishmessage('Good Morning')
    }

    let sayafternoon = () => {
        setwishmessage('Good AfterNoon')
    }

    let sayevening = () => {
        setwishmessage('Good Evening')
    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <p className="h4">Wishing Message</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{wishmessage}</p>
                                <button className="btn btn-danger" onClick={saymorning}>Good Morning</button>&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={sayafternoon}>Good AfterNoon</button>&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={sayevening}>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MessageCard;