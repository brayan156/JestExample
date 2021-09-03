const esprimo = require ('./app.js')

describe('Tests para la funcion esprimo(a)', function () {
    it("Test 1 - primo", function () {
        expect(esprimo(2017)).toBeTruthy();
    });

    it('Test 2 - numero 1', function () {
        expect(1 === 1).toBeTruthy(); 
        expect(esprimo(1)).toBeFalsy();
    });
    it("Test 3 - no primo", function () {
        expect(esprimo(4)).toBeFalsy();
    });
    it("Test 4 - numero 2", function () {
        expect(esprimo(2)).toBeTruthy();
    });
    it("Test 5 - valores negativos", function () {
        expect(esprimo(-3)).toBeFalsy();
    });
});
