"use strict";
exports.__esModule = true;
function printFullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
printFullName({ firstName: 'Joe', lastName: 'Doe' });
printFullName({ firstName: 'Mary' });
