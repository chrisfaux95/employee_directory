// import fs from 'fs';
import Users from './users.json';

export default function getUsers() {
    let result = Users;
    return result.results;
}

