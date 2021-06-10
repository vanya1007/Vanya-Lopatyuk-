'use strict';

function filterBy(list, dtype) {
    let createArray = list.filter(
        function(member) {
        return typeof (member) !== dtype ;
    }
    );
    console.log(createArray);
    alert(createArray);
    return createArray;
}
filterBy(['hello', 'world', 23, '23', null], 'string');