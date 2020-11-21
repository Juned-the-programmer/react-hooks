import React, { useContext } from 'react';
import UserContext from './UserContext';

let ComponentThree = () => {

    let userinfo = useContext(UserContext);
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <p className="h3">Component Three</p>
                                <pre>{JSON.stringify(userinfo)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ComponentThree;