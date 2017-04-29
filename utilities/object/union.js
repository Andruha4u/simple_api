'use strict';

//please use this module when you will need to extend some object/module 
function union(firstObj, secondObj){
    var firstObjKeys = Object.keys(firstObj);
    var secondObjKeys = Object.keys(secondObj);
    var maxKeysArrayLength = firstObjKeys.length >= secondObjKeys.length ? firstObjKeys.length : secondObjKeys.length;

    for (var i = 0; i < maxKeysArrayLength; i++){
        if ((firstObjKeys[i] && secondObjKeys[i]) &&
            (firstObjKeys[i] === secondObjKeys[i] ) ){
                throw new Error('Error occurred (same prop names) while trying to union:' + firstObjKeys[i]);
            }
    }

    //will use firstObj as a base object to fill it with other functions and props
    for (var i = 0; i < secondObjKeys.length; i++){
        firstObj[secondObjKeys[i]] = secondObj[secondObjKeys[i]];
    }

    return firstObj;
}

module.exports = union;