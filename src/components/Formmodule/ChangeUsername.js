import React, { useState } from 'react';

let ChangeUsername = () => {

    let [username , setusername] = useState('')

    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h3">React two way Data Binding</p>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" name="username" 
                                        onChange={(e) => setusername(e.target.value)}
                                        // onChange={UpdateInput}
                                        value={username}
                                        className="form-control" placeholder="Enter the UserName Here"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="h3">{JSON.stringify(username)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChangeUsername;