import React, { useState } from 'react';

let Register = () => {

    let [Profile , setProfile ] = useState({
        first_name : '',
        last_name : '',
        email : '',
        username : '',
        password : ''
    })

    let UpdateInput = (event) => {
        setProfile({
            ...Profile,
            [event.target.name] : event.target.value
        })
    }

    let SubmitFormData = (event) => {
        event.preventDefault();
        console.log(Profile)
    }

    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h3">Register</p>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={SubmitFormData}>
                                    <div className="form-group">
                                        <input type="text" name="first_name"
                                        onChange={UpdateInput}
                                        value={Profile.first_name}
                                        className="form-control" placeholder="Enter the First Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="last_name"
                                        onChange={UpdateInput}
                                        value={Profile.last_name}
                                        className="form-control" placeholder="Enter the Last Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email"
                                        onChange={UpdateInput}
                                        value={Profile.email}
                                        className="form-control" placeholder="Enter the Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="username"
                                        onChange={UpdateInput}
                                        value={Profile.username}
                                        className="form-control" placeholder="Enter the UserName"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password"
                                        onChange={UpdateInput}
                                        value={Profile.password}
                                        className="form-control" placeholder="Enter the Password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Register" className="btn btn-warning"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <pre>{JSON.stringify(Profile)}</pre>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register;