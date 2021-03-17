texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')
#
#   OUTPUT
#   supermercado superação
#

# Positive Lookbehind
#captura palavras que sejam precedidas da palavra super (uma ou mais ocorrências)
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')
#
#   OUTPUT
#   mercado ação
#

# Negative Lookbehind
#captura palavras que tenham mercado e que não sejam precedidas da palavra super (uma ou mais ocorrências)
puts texto.scan(/(?<!super)mercado/i)
#
#   OUTPUT
#   MERCADO Mercado
#
