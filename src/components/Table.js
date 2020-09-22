import React from 'react';
import EmployeeRow from './EmployeeRow';
import getUsers from '../utils/API'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table() {
    const employees = getUsers();
    return (
        <div className='container-fluid mx-auto justify-content-center'>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(item => <EmployeeRow employee={item} />)}
                </tbody>
            </table>
        </div>
    )
}