import React from 'react';
import EmployeeRow from './EmployeeRow';
import getUsers from '../utils/API'

export default function Table() {
    const employees = getUsers();
    return (
        <div>
        <table>
            <thead className="table table-dark">
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Picture</th>
            </thead>
            <tbody>
                {employees.map(item => <EmployeeRow employee={item}/>)}
            </tbody>
        </table>
        </div>
    )
}