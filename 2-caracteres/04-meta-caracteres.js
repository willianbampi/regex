// . ? * + - ^ $ | [ ] { } ( ) \ : todos esses caracteres são meta caracteres
const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./g

console.log(texto.split(regexPonto))
/*
    OUTPUT
    [ '1,2,3,4,5,6,a', 'b c!d?e' ]
*/

const regexSimbolos = /,|\.|\?|!| /g

console.log(texto.split(regexSimbolos))
/*
    OUTPUT
    [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e' ]
*/