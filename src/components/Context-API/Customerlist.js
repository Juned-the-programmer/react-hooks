import Axios from 'axios';
import React, { useEffect, useState } from 'react';

let CustomerList = () => {

    let [customer , setcustomer ] = useState([]);
    let [errormessage , seterrormessage] = useState('');

    useEffect(() => {
        let DataURL = 'https://jsonplaceholder.typicode.com/users'
        Axios.get(DataURL).then((response) => {
            setcustomer(response.data)
        }).catch((error) => {
            console.error(error)
            seterrormessage(error)
        })
    })
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h3">Customer List</p>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover table-striped text-center table-primary">
                                    <thead className="table-dark text-white">
                                        <tr>
                                            <th>Sno</th>
                                            <th>Name</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>City</th>
                                            <th>phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                           customer.length > 0 ? 
                                           <React.Fragment>
                                               {
                                                   customer.map(customers => {
                                                       return(
                                                        <tr>
                                                            <td>{customers.id}</td>
                                                            <td>{customers.name}</td>  
                                                            <td>{customers.username}</td>
                                                            <td>{customers.email}</td>
                                                            <td>{customers.address.city}</td>
                                                            <td>{customers.phone}</td>
                                                        </tr>
                                                       ) 
                                                   })
                                               }
                                           </React.Fragment>
                                           :null
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CustomerList