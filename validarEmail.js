function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

module.exports = validarEmail;

// Pruebas unitarias
describe('Validación de correos electrónicos', () => {
    test('Debería retornar true para un correo electrónico válido', () => {
        const emailValido = "usuario@example.com";
        expect(validarEmail(emailValido)).toBe(true);
    });

    test('Debería retornar false para un correo electrónico inválido', () => {
        const emailInvalido = "usuarioexample.com";
        expect(validarEmail(emailInvalido)).toBe(false);
    });
});