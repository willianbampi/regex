const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

console.log(texto.match(/\.mp3/g))
/*
    OUTPUT
    [ '.mp3', '.mp3', '.mp3', '.mp3' ]
*/

//usando símbolo de letra e número e quantificador de um ou mais
console.log(texto.match(/\w+\.mp3/g))
/*
    OUTPUT
    [ 'jazz.mp3', 'rock.mp3', 'podcast.mp3', 'blues.mp3' ]
*/