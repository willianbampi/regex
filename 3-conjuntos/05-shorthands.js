const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

//números [0-9]
console.log(texto.match(/\d/g))
/*
    OUTPUT
    [ '1', '2', '3', '4', '5', '6' ]
*/

//não números [^0-9]
console.log(texto.match(/\D/g))
/*
    OUTPUT
    [ ',',  ',',  ',', ',',  ',', ',',  'a',  '.', 'b',  ' ', 'c',  '!',  'd', '?',  'e', '\r', '\t', '-', '\n', 'f', '_',  'g' ]
*/

//caracteres [a-zA-Z0-9_]
console.log(texto.match(/\w/g))
/*
    OUTPUT
    [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f', '_', 'g' ]
*/

//não caracteres [^a-zA-Z0-9_]
console.log(texto.match(/\W/g))
/*
    OUTPUT
    [ ',', ',',  ',',  ',', ',', ',',  '.',  ' ', '!', '?',  '\r', '\t', '-', '\n' ]
*/

//espaço [ \t\n\r\f]
console.log(texto.match(/\s/g))
/*
    OUTPUT
    [ ' ', '\r', '\t', '\n' ]
*/

//não espaço [^ \t\n\r\f]
console.log(texto.match(/\S/g))
/*
    OUTPUT
    [ '1', ',', '2', ',', '3', ',', '4', ',', '5', ',', '6', ',', 'a', '.', 'b', 'c', '!', 'd', '?', 'e', '-', 'f', '_', 'g' ]
*/

// \b \B