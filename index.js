// Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. 
// Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.
let numberOne;
let numberTwo;

function writeName() {
    let name = document.querySelector('#name').value;

    // alert(`Привет, ${name}!`);
    return name;
}

function writeNumber1() {
    return numberOne = document.querySelector('#number1').value;
}

function writeNumber2() {
    return numberTwo = document.querySelector('#number2').value;
}

class StaticCalculator {
    static calcSumStatic() {
        let staticSumResult = +numberOne + +numberTwo;
        return (staticSumResult);
    };

    static calcSubstrStatic() {
        let staticSubstrResult = +numberOne - +numberTwo;
        return (staticSubstrResult);
    }

    static calcDivStatic() {
        let staticDivResult = +numberOne / +numberTwo;
        return (staticDivResult);
    }

    static calcMultStatic() {
        let staticMultResult = +numberOne * +numberTwo;
        return (staticMultResult);
    }
}