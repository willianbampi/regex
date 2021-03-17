const texto = '.$+*?-'

//não precisa de escape dentro do conjunto para interpretar como literal (não todos pois existem excessões)
console.log(texto.match(/[+.?*$]./g))
/*
    OUTPUT
    [ '.$', '+*', '?-' ]
*/

//isso é um intervalo (range) e não literal
console.log(texto.match(/[$-?]/g))
/*
    OUTPUT
    [ '.', '$', '+', '*', '?', '-' ]
*/

//não é um intervalo (range), pois tem um scape que interpreta como literal
console.log(texto.match(/[$\-?]/g))
/*
    OUTPUT
    [ '$', '?', '-' ]
*/

//não é um intervalo (range), pois precisa de dois elementos entre o '-'
console.log(texto.match(/[-?]/g))
/*
    OUTPUT
    [ '?', '-' ]
*/

//pode precisar de escape dentro do conjunto: - [ ] ^