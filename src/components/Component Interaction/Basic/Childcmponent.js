import React, { useState } from 'react';

let ChildComponent = (Props) => {

    let[child , setchild] = useState({
        message : 'I am from Child Message'
    })

    let sendMessage = () => {
        Props.childmessage(child.message)
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">Child Component</p>
                                <p className="h3">Parent Message : {Props.parentmessage}</p>
                                <button className="btn btn-primary btn-sm" onClick={sendMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ChildComponent;