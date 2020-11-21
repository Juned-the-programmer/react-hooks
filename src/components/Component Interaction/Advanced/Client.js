import React, { useState } from 'react';

let Client = (props) => {

    let [Message , setmessage ]= useState({
        message : ''
    })

    let UpdateInput = (event) => {
        setmessage({
            message : event.target.value
        })
        
    }

    let SendData = (event) => {
        event.preventDefault();
        props.SendClientData(Message.message)
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <p className="h3">Client Card</p>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={SendData}>
                                    <div className="form-group">
                                        <input type="text" 
                                        name="message"
                                        onChange={UpdateInput}
                                        className="form-control" placeholder="Enter Something"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary btn-sm" value="Send"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="h3">Server Message is : {props.servermessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Client;