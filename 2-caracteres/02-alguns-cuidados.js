const textoUmaLinha = '...' // aspas simples ou duplas

const textoMultiLinha = `
    linha 1
    linha 2
`

// cuidado com o tab literal e a configuração da IDE que pode inserir espaços no lugar do tab
console.log('	'.match(/\s/g))
/*
    OUTPUT
    [ '\t' ]
*/