const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//quantificadores são gulosos por padrão (greedy)

console.log(texto.match(/<div>.+<\/div>/g))
/*
    OUTPUT
    [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
*/

console.log(texto.match(/<div>.*<\/div>/g))
/*
    OUTPUT
    [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
*/

console.log(texto.match(/<div>.{0,100}<\/div>/g))
/*
    OUTPUT
    [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
*/

//quantificadores não gulosos (lazy)

console.log(texto.match(/<div>.+?<\/div>/g))
/*
    OUTPUT
    [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
*/

console.log(texto.match(/<div>.*?<\/div>/g))
/*
    OUTPUT
    [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
*/

console.log(texto.match(/<div>.{0,100}?<\/div>/g))
/*
    OUTPUT
    [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
*/