const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

//captura palavras que começem com dia e que antes dessa tenha uma borda
console.log(texto1.match(/\bdia\w+/gi))
/*
    OUTPUT
    [ 'diatonico', 'diafragma' ]
*/

//captura palavras que terminam com dia e que após essa tenha uma borda
console.log(texto1.match(/\w+dia\b/gi))
/*
    OUTPUT
    [ 'media', 'wikipedia', 'bom_dia', 'melodia' ]
*/

//captura palavras que tenham dia no meio da palavra
console.log(texto1.match(/\w+dia\w+/gi))
/*
    OUTPUT
    [ 'radial' ]
*/

//captura palavras que tenham dia entre bordas
console.log(texto1.match(/\bdia\b/gi))
/*
    OUTPUT
    [ 'dia' ]
*/

// borda é não \w, que é [^A-Za-z0-9_] temos problemas com acentos!
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

//captura palavras que tenham dia entre bordas
console.log(texto2.match(/\bdia\b/gi))
/*
    OUTPUT
    [ 'dia', 'dia', 'dia', 'dia' ]
*/

//captura palavras que tenham dia entre não espaços
//a vírgula entra!
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))
/*
    OUTPUT
    [ 'dia', 'diatônico', 'diafragma,', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ]
*/

//a vírgula não entra!
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
/*
    OUTPUT
    [ 'dia', 'diatônico', 'diafragma', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ]
*/