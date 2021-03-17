const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

//não é um grupo, dentro de um conjunto o grupo não funciona
console.log(texto.match(/[(abc)]/gi))
/*
    OUTPUT
    [ '(', 'a', ')', 'A', 'B', 'C', 'a', 'b', 'c' ]
*/

//é um grupo que dentro possui um conjunto
console.log(texto.match(/([abc])/gi))
/*
    OUTPUT
    [ 'a', 'A', 'B', 'C', 'a', 'b', 'c' ]
*/

console.log(texto.match(/(abc)+/gi))
/*
    OUTPUT
    [ 'ABCabc' ]
*/