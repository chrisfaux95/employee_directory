import React from 'react';

export default function EmployeeRow(props) {
    return (
        <tr>
            <td><img src={props.employee.picture.medium} 
                alt={props.employee.name.first + ' ' + props.employee.name.last}
            /></td>
            <td>{props.employee.name.first} {props.employee.name.last}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.phone}</td>
            
        </tr>
    )
}