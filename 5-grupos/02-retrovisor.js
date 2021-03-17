const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto1.match(/<(\w+)>.*<\/\1>/g))
/*
    OUTPUT
    [ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ]
*/

const texto2 = 'Lentamente é mente muito lenta.'

console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
/*
    OUTPUT
    [ 'Lentamente é mente muito lenta.' ]
*/

// ?: não guarda valor do grupo
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))
/*
    OUTPUT
    [ 'Lentamente é mente' ]
*/

console.log(texto2.match(/(lenta)(mente)/gi))
/*
    OUTPUT
    [ 'Lentamente' ]
*/

console.log(texto2.match(/(lenta)(mente)?/gi))
/*
    OUTPUT
    [ 'Lentamente', 'lenta' ]
*/

console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))
/*
    OUTPUT
    mente é mente muito lenta.
*/

const texto3 = 'abcdefghijkll'

console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))
/*
    OUTPUT
    [ 'abcdefghijkll' ]
*/