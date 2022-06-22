const { suma, resta, multiplicar } = require('./../functions');


describe('Pruebas para testear la funcion suma', () => {
    test('La function suma debe estar definida', () => {
        expect(suma()).toBeDefined()
    })

    test('Si la funcion suma recibe 4 y 5 debe retornar 9', () => {
        expect(suma(4, 5)).toBe(9);
    });

})

describe('Pruebas para testear la funcion resta', () => {
    test('La function resta debe estar definida', () => {
        expect(resta()).toBeDefined()
    })

    test('Si la funcion resta recibe 4 y 5 debe retornar -1', () => {
        expect(resta(4, 5)).toBe(-1);
    });

})


describe('Pruebas para testear la funcion multiplicar', () => {
    test('La function multiplicar debe estar definida', () => {
        expect(multiplicar()).toBeDefined()
    })

    test('Si la funcion multiplicar recibe 4 y 5 debe retornar 20', () => {
        expect(multiplicar(4, 5)).toBe(20);
    });

})

