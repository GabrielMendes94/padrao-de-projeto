// interface Strategy {
//     execute(a: number, b: number): number;
// }

// class Adicao implements Strategy {
//     execute(a: number, b: number): number {
//         return a + b;
//     }
// }

// class Subtracao implements Strategy {
//     execute(a: number, b: number): number {
//         return a - b;
//     }
// }

// class Multiplicacao implements Strategy {
//     execute(a: number, b: number): number {
//         return a * b;
//     }
// }

// class Calculadora {
//     strategy: Strategy;

//     setStrategy(strategy: Strategy) {
//         this.strategy = strategy;
//     }

//     executeStrategy(a: number, b: number): number {
//         return this.strategy.execute(a, b);
//     }
// }

// // Exemplo de uso
// let calculoadora = new Calculadora();

// // Definir a estratégia como adição
// calculoadora.setStrategy(new Adicao());
// console.log(calculoadora.executeStrategy(5, 3));  // Saída: 8

// // Definir a estratégia como subtração
// calculoadora.setStrategy(new Subtracao());
// console.log(calculoadora.executeStrategy(5, 3));  // Saída: 2

// // Definir a estratégia como multiplicação
// calculoadora.setStrategy(new Multiplicacao());
// console.log(calculoadora.executeStrategy(5, 3));  // Saída: 15

interface Strategy {
    execute(a: number, b: number): number;
}

class Addition implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class Subtraction implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

class Multiplication implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

class Calculator {
    strategy: Strategy;

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

// Exemplo de uso
let calculator = new Calculator();

let firstNumber = parseInt(prompt("Digite o primeiro número:"));
let secondNumber = parseInt(prompt("Digite o segundo número:"));
let operation = prompt("Digite a operação (soma, subtração, multiplicação):");

switch(operation) {
    case "soma":
        calculator.setStrategy(new Addition());
        break;
    case "subtração":
        calculator.setStrategy(new Subtraction());
        break;
    case "multiplicação":
        calculator.setStrategy(new Multiplication());
        break;
    default:
        console.log("Operação desconhecida");
        break;
}

console.log(`O resultado da ${operation} é: ${calculator.executeStrategy(firstNumber, secondNumber)}`);
