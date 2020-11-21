import React, { useState } from 'react';
import ChildComponent from './Childcmponent';

let ParentComponent = () => {

    let[Parent , SetParent] = useState({
        message : 'I am from Parent component',
        wishmessage : ''
    })

    let ChildMessage = (data) => {
        SetParent({
            ...Parent,
            wishmessage : data
        })
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">Parent Component</p>
                                <p className="h3">Child Message : {Parent.wishmessage}</p>
                                <ChildComponent parentmessage={Parent.message} childmessage={ChildMessage}></ChildComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ParentComponent;