import React, { useState } from 'react';

let ChildCard = (props) => {

    let [FormData , SetFormData ] = useState({
        name : ''
    })

    let UpdateInput = (event) => {
        SetFormData({
            name : event.target.value
        })

        props.ChildMessage(FormData.name)
    }

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <form action="" className="form-inline">
                                    <div className="form-group">
                                        <input type="text" 
                                        name = "name"
                                        onChange={UpdateInput}
                                        className="form-control" placeholder="Enter Something"/>
                                    </div>
                                </form>
                                <p className="h3">Parent Message : {props.ParentMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ChildCard;