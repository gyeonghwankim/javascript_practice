/*
    Step2 다각형의 넓이

    1. 다각형의 넓이를 구하는 함수 getArea, 함수 getAreaAvg 구현
    2. 함수 호출순서를 알려주는 함수 printExecutionSequence 구현
*/

const figureTypes = ['circle', 'parallelogram', 'trapezoid'];
const ARG_ERROR_MSG = '오류 발생! 올바른 인자값 입력해주세요';

function getArea(figureType, ...values){
    let ret;

    if(figureType === 'circle') ret = getCircleArea(...values);
    else if(figureType === 'parallelogram') ret = getParallelogramArea(...values);
    else if(figureType == 'trapezoid') ret = getTrapezoid(...values);
    
    if(ret === undefined || isNaN(ret)) return ARG_ERROR_MSG;
    return ret;
}

function getCircleArea(radius){
    return Math.pow(radius,2) * Math.PI;
}

function getParallelogramArea(width, height){
    return width * height;
}

function getTrapezoid(upperSide, lowerSide, height){
    return upperSide * lowerSide * height;
}

function getAreaAvg(){
}

console.log(getArea('circle', 10, 3.14));
console.log(getArea('parallelogram', 10, 15));
console.log(getArea('trapezoid', 10));