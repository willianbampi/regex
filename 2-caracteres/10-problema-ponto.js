//o caracter ponto não resolve para \n (quebra de linha)
//usando dotall reolve e algumas linguagens tem uma flag /exp/s, mas JS não!

const texto = 'Bom\ndia'

console.log(texto.match(/./gi))
/*
    OUTPUT
    [ 'B', 'o', 'm', 'd', 'i', 'a' ]
*/

console.log(texto.match(/.../gi))
/*
    OUTPUT
    [ 'Bom', 'dia' ]
*/

//ponto não engloba o \n
console.log(texto.match(/..../gi)) 
/*
    OUTPUT
    null
*/