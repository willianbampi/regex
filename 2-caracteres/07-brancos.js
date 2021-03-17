const texto = `
ca	r
r	o s!
`

//usando os caracteres relativos a espaços, quebra de linha e tab
console.log(texto.match(/ca\tr\nr\to\ss!/))
/*
    OUTPUT
    [
        'ca\tr\nr\to s!',
        index: 1,
        input: '\nca\tr\nr\to s!\n',
        groups: undefined
    ]
*/