function checkLastName(a,b) {
    let nameA = a.name.last.toUpperCase();
    let nameB = b.name.last.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
}

export function sortNames(arr) {
    return arr.sort(checkLastName);
}

export function sortNumbers(arr) {
    return arr.sort();
}