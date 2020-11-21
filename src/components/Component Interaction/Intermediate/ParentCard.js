import React, { useState } from 'react';
import ChildCard from './ChildCard';

let ParentCard = () => {

    let[FormData , setFormData] = useState({
        name : '',
        childmessage : ''
    })  

    let UpdateInput = (event) => {
        setFormData({
            ...FormData,
            name : event.target.value
        })
    }

    let ChildMessage = (data) => {
        setFormData({
            ...FormData,
            childmessage : data
        })
    }

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h3">React Component Interaction</p>
                            </div>
                            <div className="card-body">
                                <form action="" className="form-inline">
                                    <div className="form-group">
                                        <input type="text" 
                                        name="name"
                                        onChange={UpdateInput}
                                        className="form-control" placeholder="Enter Something"/>
                                    </div>
                                </form>
                                <p className="h3">Child Message : {FormData.childmessage}</p>
                                <ChildCard ParentMessage={FormData.name} ChildMessage={ChildMessage}></ChildCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ParentCard;