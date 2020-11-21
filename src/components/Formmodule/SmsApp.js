import React, { useState } from 'react';

let SmsApp = () => {

    let [MaxCount , setMaxCount ] = useState(100);
    let [Charcount , setCharcount ] = useState(100);

    let UpdateInput = (event) => {
        setCharcount(MaxCount - event.target.value.length)
    }

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <p className="h3">SMSAPP</p>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <textarea name="smsapp" 
                                        onChange={UpdateInput}
                                        maxLength={MaxCount}
                                        cols="5" rows="3" className="form-control" placeholder="Type Something Her"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="h2">{Charcount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SmsApp;