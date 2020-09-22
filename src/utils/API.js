import fs from 'fs';

export default function getUsers() {
    let result = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(result).results;
}

