/*
    Step3 데이터 다루기

    1. type이 일치하는 obejct의 name을 출력하는 함수 getMatchedType 구현
    2. 함수 customReduce, customFilter, customForEach, customMap 구현
*/

const exampleData = require('./exampleData');

function getMatchedType(json, type){
    const matchedName = [];
    
    const getName = (_json, _type) => {
        _json.customReduce((accumulator, currentValue) => {
            if(_type === currentValue.type) {
                accumulator.push(`"${currentValue.name}"`);
            }
            if(currentValue.childnode) getName(currentValue.childnode, _type);
            return accumulator;
        }, matchedName)
    }

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

Array.prototype.customFilter = function(callback){
    const ret = [];
    const innerFunc = (currentIndex) => {
        if(currentIndex == this.length) return;
        if(callback(this[currentIndex])) ret.push(this[currentIndex]);
        innerFunc(currentIndex+1);
    }
    innerFunc(0);
    return ret;
}

Array.prototype.customForEach = function(callback){
    const innerFunc = (currentIndex) => {
        if(currentIndex == this.length) return;
        callback(this[currentIndex])
        innerFunc(currentIndex+1);
    }
    innerFunc(0);
}

Array.prototype.customMap = function(callback){
    const innerFunc = (currentIndex) => {
        if(currentIndex == this.length) return;
        this[currentIndex] = callback(this[currentIndex]);
        innerFunc(currentIndex+1);
    }
    innerFunc(0);
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.customFilter(word => word.length > 6);
console.log(result)

const array1 = ['a', 'b', 'c'];
array1.customForEach(element => console.log(element));

const array2 = [1, 4, 9, 16];
const map1 = array2.customMap(x => x * 2);
console.log(map1);

/*
console.log(getMatchedType(exampleData, "samsung"));
console.log(getMatchedType(exampleData, "lg"));
*/