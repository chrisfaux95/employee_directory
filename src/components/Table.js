import React, { useState } from 'react';
import EmployeeRow from './EmployeeRow';
import getUsers from '../utils/API'
import { sortNames, sortEmails, filterNames, filterEmails } from '../utils/sort';


export default function Table() {
    const [employees, setEmployees] = useState(getUsers());
    const [employeesFiltered, setEmployeesFiltered] = useState(employees);

    const handleInputChange = (event) => {
        const filterStr = event.target.value;
        setEmployeesFiltered(employees.filter((item) => filterNames(item, filterStr) || filterEmails(item, filterStr)))
    }

    const handleNameSort = () => {
        let buffer = [...employeesFiltered];
        sortNames(buffer);
        setEmployeesFiltered(buffer);
        let buffer2 = [...employees];
        sortNames(buffer2);
        setEmployees(buffer2)
    }

    const handleEmailSort = () => {
        let buffer = [...employeesFiltered];
        sortEmails(buffer);
        setEmployeesFiltered(buffer);
        let buffer2 = [...employees];
        sortEmails(buffer2);
        setEmployees(buffer2)
    }

    return (
        <div className='container-md mx-auto my-1 justify-content-center'>
            <input type="text" id="employee" onChange={handleInputChange}></input>
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
                    {employeesFiltered.map(item => <EmployeeRow employee={item} />)}
                </tbody>
            </table>
        </div>
    )
}