import React, { useState } from 'react';
import ComponentB from './ComponentB';

let ComponentA = () => {

    let[parent , setparent ] = useState({
        first_name : 'Davada',
        last_name : 'Juned',
        phone_no : 7698530801,
        city : 'Basu',
        State : 'Gujarat'
    })

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <p className="h3">Props Drilling</p>
                            </div>
                            <div className="card-body bg-primary text-white">
                                <p className="h2">Component A</p>
                                <pre>{JSON.stringify(parent)}</pre>
                                
                                <ComponentB Data={parent}></ComponentB>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ComponentA;