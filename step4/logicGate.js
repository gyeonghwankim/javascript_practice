/*
    Step4 논리 게이트

    1. BOOL 타입의 매개변수를 두 개 가지고 결과값으로 BOOL 타입을 리턴하는 NAND, NOR, XOR를 구현
    2. half-adder, full-adder 구현
    3. 10진수에서 2진수로, 2진수에서 10진수로 변환하는 함수 구현
*/

const exampleInput = [ [true, true], [true, false], [false, true], [false, false]];

const nand = (paramA, paramB) => !(paramA && paramB);
const nor = (paramA, paramB) => !(paramA || paramB);
const xor = (paramA, paramB) => (!paramA && paramB) || (paramA && !paramB);

const halfAdder = (byteA, byteB) => [byteA && byteB, xor(byteA, byteB)];
const fullAdder = (byteA, byteB, carry) => [(byteA && byteB) || xor(byteA, byteB) && carry, xor(xor(byteA, byteB),carry)];


function dec2bin(decimal) {
    let answer = [];
    let currentValue = decimal;

    while(currentValue){
        answer.push(currentValue % 2);
        currentValue = parseInt(currentValue/2);
    }
    return answer.length < 1 ? [0] : answer;
}

function bin2dec(bin) {
    return bin.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue * Math.pow(2, currentIndex), 0);
}

console.log(dec2bin(175));
console.log(bin2dec(dec2bin(175)));


/*
exampleInput.forEach((currentValue) => console.log(`NAND(${currentValue}) => ${nand(...currentValue)}`));

(() => {
    const boolCase = [true, false];
    console.log(boolCase.length);
    for(let i = 0; i < boolCase.length; ++i)
        exampleInput.forEach((currentValue)=>console.log(`fullAdder(${currentValue},${boolCase[i]} => ${fullAdder(...currentValue, boolCase[i])})`));
})();
*/