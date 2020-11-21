import React, { useState } from 'react';
import {customerData} from './CustomerData'

let Customer = () => {

    let [customers , setcustomers ] = useState(customerData)

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <p className="h3">Customers</p>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem possimus ut impedit! Deleniti ut possimus quasi. Aspernatur fugiat ratione consequuntur incidunt dolorem unde voluptatibus! Repellendus sit tenetur impedit dolore dicta.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-striped text-center table-secondary">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map(customer => {
                                        return(
                                            <tr key={customer.login.uuid}>
                                                <td>{customer.login.uuid.substr(customer.login.uuid.length - 4)}</td>
                                                <td>
                                                    <img src={customer.picture.large} alt="" height="50" weight="50"/>
                                                </td>
                                                <td>{customer.name.first}</td>
                                                <td>{customer.dob.age}</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.location.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Customer;