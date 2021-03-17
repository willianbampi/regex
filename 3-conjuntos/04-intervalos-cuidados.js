const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
/*
    OUTPUT
    [ 'a', 'b', 'c', 'a', 'c' ]
*/

//não define um range pois não tem []
console.log(texto.match(/a-c/g))
/*
    OUTPUT
    [ 'a-c' ]
*/

//intervalos usam a ordem da tabela UNICODE
console.log(texto.match(/[A-z]/g))
/*
    OUTPUT
    [ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ]
*/

//tem que respeitar a ordem da tabela UNICODE

//ordem inversa a tabela UNICODE
//console.log(texto.match(/[a-Z]/g))

//ordem inversa a tabela UNICODE
//console.log(texto.match(/[4-1]/g))