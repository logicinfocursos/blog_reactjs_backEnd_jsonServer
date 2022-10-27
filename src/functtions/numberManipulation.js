/*********************************************************************** 
**  getRandomIntNumber: gerar um número aleatório inteiro entre o 
    min e máx recebido
***********************************************************************/
export const getRandomIntNumber = (min, max) => {

    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min

} /*** theEnd: getRandomIntNumber ***/



/*********************************************************************** 
**  getCode: gerar um código com o tamanho definido em 'codeLength', 
    podendo ainda receber um prefix e/ou sufix
***********************************************************************/
export const getCode = (codeLength = 5, prefix = '', sufix = '') => {

    const characters = '0123456789abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let code = ''

    for (let i = 0; i < codeLength; i++)
        code = code + characters.substr(getRandomIntNumber(0, characters.length), 1)

    if (prefix !== '') code = prefix + code

    if (sufix !== '') code = code + sufix

    return code

} /*** theEnd: getCode ***/



/*********************************************************************** 
 **  cpfDigitVerify: realizar o cáclulo dos 2 diígitos do cpf
 ***********************************************************************/
export const cpfDigitVerify = (cpfToVerify) => {

    /*     

        O número de um CPF tem 9 algarismos e mais dois dígitos verificadores, que são indicados após uma barra. 
        Logo, um CPF tem 11 algarismos. O número do CPF é escrito na forma ABCDEFGHI/JK ou diretamente como ABCDEFGHIJK, onde os algarismos não podem ser todos iguais entre si.
        O J é chamado 1° dígito verificador do número do CPF.
        O K é chamado 2° dígito verificador do número do CPF.

        source: https://www.somatematica.com.br/faq/cpf.php

        existe um furo nessa função, se forem digitados onze números iguais o resultado será verdadeiro

    */

    if (!cpfToVerify) return false
    if (cpfToVerify === '') return false

    cpfToVerify = cpfToVerify.replace(/[^0-9]/g, '') // eliminar caracteres diferentes dos números entre '0123456789'

    if (cpfToVerify.length !== 11) return false

    const digitToVerify = cpfToVerify.substr(9, 2)
    let cpf = []

    let result = 0
    let fator = 10

    /*

        Primeiro Dígito
        Para obter J multiplicamos A, B, C, D, E, F, G, H e I pelas constantes correspondentes:

        A	B	C	D	E	F	G	H	I
        x10	x9	x8	x7	x6	x5	x4	x3	x2

    */

    for (let i = 0; i < 9; i++) {
        cpf[i] = cpfToVerify.substr(i, 1)
        result += cpf[i] * fator
        fator--
    }

    let rest = (result % 11)
    let digit1 = 11 - (rest < 2 ? 0 : rest)

    /*

        O resultado da soma, 10A + 9B + 8C + 7D + 6E + 5F + 4G + 3H + 2I, é dividido por 11.
        Analisamos então o RESTO dessa divisão:
        Se for 0 ou 1, o dígito J é [0] (zero). Se for 2, 3, 4, 5, 6, 7, 8, 9 ou 10, o dígito J é [11 - RESTO]

    */

    let digit2 = 0
    fator = 11

    /*

        Segundo Dígito
        Já temos J. Para obter K multiplicamos A, B, C, D, E, F, G, H, I e J pelas constantes correspondentes:

        A	B	C	D	E	F	G	H	I	J
        x11	x10	x9	x8	x7	x6	x5	x4	x3	x2

    */

    cpf[9] = digit1

    for (let i = 0; i < cpf.length; i++) {
        digit2 += cpf[i] * fator
        fator--
    }

    digit2 = digit2 % 11
    digit2 = digit2 < 2 ? 0 : (11 - digit2)

    const digitCalculated = String(digit1) + String(digit2)

    /*
        O resultado da soma, 11A + 10B + 9C + 8D + 7E + 6F + 5G + 4H + 3I + 2J, é dividido por 11.
        Verificamos então o RESTO dessa divisão:

        Se for 0 ou 1, o dígito K é [0] (zero). Se for 2, 3, 4, 5, 6, 7, 8, 9 ou 10, o dígito K é [11 - RESTO].
    */

    return digitCalculated === digitToVerify

} /*** theEnd: getCode ***/