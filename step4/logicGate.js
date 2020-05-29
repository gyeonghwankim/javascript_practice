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


// exampleInput.forEach((currentValue) => console.log(`NAND(${currentValue}) => ${nand(...currentValue)}`));

const halfAdder = (byteA, byteB) => [byteA && byteB, xor(byteA, byteB)];
const fullAdder = (byteA, byteB, carry) => [(byteA && byteB) || xor(byteA, byteB) && carry, xor(xor(byteA, byteB),carry)];

(() => {
    const boolCase = [true, false];
    console.log(boolCase.length);
    for(let i = 0; i < boolCase.length; ++i)
        exampleInput.forEach((currentValue)=>console.log(`fullAdder(${currentValue},${boolCase[i]} => ${fullAdder(...currentValue, boolCase[i])})`));
})();
