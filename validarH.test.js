// validarH.test.js
const validarH = require('./validarH');

describe('Validación de correos electrónicos', () => {
    test('Debería retornar true para un correo electrónico válido', () => {
        const emailValido = "haiber@gmail.com";
        expect(validarH(emailValido)).toBe(true);
    });

    test('Debería retornar false para un correo electrónico inválido', () => {
        const emailInvalido = "haibertgmail.com";
        expect(validarH(emailInvalido)).toBe(false);
    });
});