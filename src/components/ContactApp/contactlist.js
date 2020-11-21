import Axios from 'axios';
import React, { useEffect, useState } from 'react';

let ContactList = () => {   

    let [user , setuser ] = useState([]);
    let [error , seterror] = useState('');

    useEffect(() => {
        let DataURl = 'https://gist.githubusercontent.com/Juned-the-programmer/aacea0c40ea12d3e28eb920099ecda4e/raw/5acba8ab646525b8f826b4429c6a7a18657004ac/user.json'
        Axios.get(DataURl).then((response) => {
            setuser(response.data)
        }).catch((error) => {
            seterror(error.error)
        })
    })
    return(
        <React.Fragment>
            <table className="table table-hover text-center table-striped table-primary">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.length > 0 ? 
                        <React.Fragment>
                            {
                                user.map(users => {
                                    return(
                                        <tr>
                                            <td>{users.login.uuid}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    )
                                })
                            }
                        </React.Fragment>
                        : null
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}
export default ContactList;