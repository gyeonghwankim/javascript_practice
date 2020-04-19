/*
    Step3 데이터 다루기

    1. type이 일치하는 obejct의 name을 출력하는 함수 getMatchedType 구현
    2. 함수 customReduce, customFilter, customForeach, customMap 구현
*/

const exampleData = require('./exampleData');

function getMatchedType(json, type){
    const matchedName = [];

    const getName = (_json, _type) => _json.forEach(element => {
        if(element.type === type) matchedName.push(`"${element.name}"`);
        getName(element.childnode, _type);        
    });

    getName(json, type);

    return `${type} 타입의 데이터는 총 ${matchedName.length}개이며, ${matchedName.join(", ")} 입니다`
}

Array.prototype.customReduce = function(callback, initialValue){
    const index = 0;

    if(initialValue === undefined){
        initialValue = this[0];
        index = 1;
    }

    const innerFunc = (accumulator, currentIndex) => {
        if(currentIndex == this.length) return accumulator;
        return innerFunc(callback(accumulator, this[currentIndex]), currentIndex+1);
    }
    return innerFunc(initialValue, index);
}

console.log(getMatchedType(exampleData, "samsung"));
console.log(getMatchedType(exampleData, "lg"));
