import React, { useState } from 'react';

let Server = (props) => {

    let[message , Setmessage ] = useState({
        message : ''
    })

    let UpdateInput = (event) => {
        Setmessage({
            message: event.target.value
        })
    }

    let SubmitForm = (event) => {
        event.preventDefault(); 
        props.sendData(message.message)
    }

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <p className="h3">Server Card</p>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={SubmitForm}>
                                    <div className="form-group">
                                        <input type="text"
                                        name="message"
                                        onChange={UpdateInput}
                                        className="form-control" placeholder="Enter Something"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Send" className="btn btn-warning btn-sm"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="h3">Message From Client is : {props.clientmessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Server;