const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')

console.log('Métodos da RegExp...')

console.log(regexNove.test(texto))
/*
    OUTPUT
    true
*/

console.log(regexNove.exec(texto))
/*
    OUTPUT
    [
        '9',
        index: 18,
        input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
        groups: undefined
    ]
*/

const regexLetras = /[a-f]/g

console.log('Métodos da string...')

console.log(texto.match(regexLetras))
/*
    OUTPUT
    [ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/

console.log(texto.search(regexLetras))
/*
    OUTPUT
    20
*/

console.log(texto.replace(regexLetras, 'Achei'))
/*
    OUTPUT
    0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
*/

console.log(texto.split(regexLetras))
/*
    OUTPUT
    [ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
*/