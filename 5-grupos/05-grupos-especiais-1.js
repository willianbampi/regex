const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))
/*
    OUTPUT
    [ 'João', 'é', 'calmo', 'mas', 'no', 'transito', 'fica', 'nervoso' ]
*/

//Positive lookahead
//captura palavras que sejam seguidas de vírgula (uma ou mais ocorrências)
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
/*
    OUTPUT
    [ 'calmo' ]
*/

//Positive lookahead
//captura palavras que sejam seguidas de ponto (uma ou mais ocorrências)
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
/*
    OUTPUT
    [ 'nervoso' ]
*/

//Positive lookahead
//captura palavras que sejam seguidas de vírgula, um espaço e a palavra mas (uma ou mais ocorrências)
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))
/*
    OUTPUT
    [ 'calmo' ]
*/

// Negative lookahead
//captura palavras que não sejam seguidas de vírgula (uma ou mais ocorrências)
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
/*
    OUTPUT
    [ 'João', 'mas', 'no', 'transito', 'fica', 'nervoso' ]
*/

//captura palavras que não sejam seguidas de vírgula (uma ou mais ocorrências) de forma a considerar espaços e pontos
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
/*
    OUTPUT
    [ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'nervoso.' ]
*/