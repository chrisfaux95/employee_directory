import React, { useEffect, useState } from 'react';
import EmployeeRow from './EmployeeRow';
import getUsers from '../utils/API'
import { sortNames, sortEmails } from '../utils/sort';

export default function Table() {
    const employees = getUsers();
    const [employeesSorted, setEmployeesSorted] = useState(employees);

    // const handleInputChange = () => {

    // }

    const handleNameSort = () => {
        console.log('sort names')
        sortNames(employeesSorted)
        setEmployeesSorted(employeesSorted);
        console.log(employeesSorted)
    }

    const handleEmailSort = () => {
        console.log('sort emails')
        sortEmails(employeesSorted);
        setEmployeesSorted(employeesSorted);
    }

    return (
        <div className='container-fluid mx-auto justify-content-center'>
            <input type="text" id="employee"></input>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name&nbsp;
                        <i onClick={handleNameSort}
                        className="fas fa-sort"> 
                                </i>
                        </th>
                        <th scope="col">Email&nbsp;
                        <i onClick={handleEmailSort}
                                className="fas fa-sort"></i>
                        </th>
                        <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesSorted.map(item => <EmployeeRow employee={item} />)}
                </tbody>
            </table>
        </div>
    )
}