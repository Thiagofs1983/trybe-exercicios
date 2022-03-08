const {sum, verifyNumber, myRemove, myFizzBuzz} = require("./sum");

describe('Exercicio 1', () => {
    it('Existe a função sum?', () => {
        expect(typeof sum).toBe('function');
    })
    it('Verifica se o retorno de (4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    it('Verifica se o retorno de (0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('Verifica se a função sum lança um erro quanto os parametros forem (4, "5")', () => {
        expect(() => verifyNumber(4, '5')).toThrow();
    })
    it('Verifica se emite mensagem "parameters must be numbers" quando parametro for (4, "5")', () => {
        expect(() => verifyNumber(4, '5')).toThrow('parameters must be numbers');
    })
})

describe('Exercicio 2', () => {
    it('Verifica se existe a função myRemove', () => {
        expect(typeof myRemove).toBe('function')
    })
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
    })
    it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})

describe('Exercicio 3', () => {
    it('Verifica se existe a função myFizzBuzz', () => {
        expect(typeof myFizzBuzz).toBe('function')
    })
    it('Com um número divisível por 3 e 5, verifique se o retorno é "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
        expect(myFizzBuzz(30)).toEqual('fizzbuzz')
    })
    it('Com um número divisível por 3, o retorno é "fizz"', () => {
        expect(myFizzBuzz(6)).toEqual('fizz');
        expect(myFizzBuzz(9)).toBe('fizz')
    })
    it('Com um número divisível por 5, o resultado é "buzz"', () => {
        expect(myFizzBuzz(5)).toEqual('buzz')
        expect(myFizzBuzz(10)).toBe('buzz')
        expect(myFizzBuzz(20)).toBe('buzz')
    })
    it('Caso número inserido não for divisível por 3 ou 5, deve retornar o próprio número', () => {
        expect(myFizzBuzz(8)).toBe(8)
    })
    it('Caso o valor inserido não for um número, retornar false', () => {
        expect(myFizzBuzz('a')).toBeFalsy()
    })
})