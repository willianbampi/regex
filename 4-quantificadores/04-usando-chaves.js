const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir uma quantificador usar {}

//um ou dois caracteres (dígitos)
console.log(texto.match(/\d{1,2}/g))
/*
    OUTPUT
    [ '12', '0',  '6', '9',  '21', '23', '45', '46' ]
*/

//exatamente dois caracteres (dígitos)
console.log(texto.match(/[0-9]{2}/g))
/*
    OUTPUT
    [ '12', '21', '23', '45', '46' ]
*/

//um ou mais caracteres (dígitos)
console.log(texto.match(/\d{1,}/g))
/*
    OUTPUT
    [ '120', '6', '9',   '21', '23',  '45', '46' ]
*/

//exatamente sete caracteres (letras) não inclui acentos
console.log(texto.match(/\w{7}/g))
/*
    OUTPUT
    [ 'recebeu', 'apostan' ]
*/

//sete ou mais caracteres (letras) incluindo acentos
console.log(texto.match(/[\wõã]{7,}/g))
/*
    OUTPUT
    [ 'recebeu', 'milhões', 'apostando' ]
*/

//um ou dois caracteres (dígitos) que possuem bordas nos dois lados
console.log(texto.match(/\b\d{1,2}\b/g))
/*
    OUTPUT
    [ '6', '9', '21', '23', '45', '46' ]
*/

//exatamente sete caracteres (letras) incluindo acentos que possuem bordas nos dois lados
console.log(texto.match(/\b[\wõ]{7}\b/g))
/*
    OUTPUT
    [ 'recebeu', 'milhões' ]
*/