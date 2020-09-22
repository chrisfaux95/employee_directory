import React from 'react';

export default function EmployeeRow(props) {
    <tr>
        <th scope="row">{props.employee.name.first + props.employee.name.last}</th>
        <td>{props.employee.email}</td>
        <td>{props.employee.phone}</td>
        <td><image src={props.employee.picture.thumbnail}/></td>
    </tr>
}