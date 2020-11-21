import React, { useState } from 'react';

let EmployeeCard = () => {
    let [employee , setemployee] = useState([
        {
            sno : 'AAA100',
            name : 'Rajan',
            age : 25,
            designation : 'Software Engineer',
            location : 'Hyderabad'
        },
        {
            sno : 'AAA101',
            name : 'Mahesh',
            age : 35,
            designation : 'Sr.Software Engineer',
            location : 'Bangalore'
        },
        {
            sno : 'AAA103',
            name : 'John',
            age : 40,
            designation : 'Project Manager',
            location : 'Chennai'
        },
        {
            sno : 'AAA104',
            name : 'Wilson',
            age : 55,
            designation : 'Director',
            location : 'Bangalore'
        }
    ])

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <p className="h3">Employee Card</p>
                            </div>
                            <div className="card-body bg-dark">
                                {
                                    employee.map(employees => {
                                        return(
                                            <div key={employees.sno} className="card m-2">
                                                <div className="card-body bg-light">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            SNO : {employees.sno}
                                                        </li>
                                                        <li className="list-group-item">
                                                            NAME : {employees.name}
                                                        </li>
                                                        <li className="list-group-item">
                                                            AGE : {employees.age} Yrs
                                                        </li>
                                                        <li className="list-group-item">
                                                            DESIGNATION : {employees.designation}
                                                        </li>
                                                        <li className="list-group-item">
                                                            LOCATION : {employees.location}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default EmployeeCard;