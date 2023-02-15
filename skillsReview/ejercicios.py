""" 
ejercicio 4: 
    Que son las expresiones regulares en Python?
"""


print('Las expresiones regulares son patrones utilizados para encontrar \nuna determinada combinación de caracteres dentro de una cadena de texto. \nLas expresiones regulares proporcionan una manera muy \nflexible de buscar o reconocer cadenas de texto.')
print('\ndentro de Python a través del módulo re. Usando este pequeño lenguaje, \nespecificas las reglas para el conjunto de cadenas de caracteres posibles que deseas hacer coincidir;\nejemplo:\n')

import re

regex = re.compile('a[3-5]+') 
print(regex,' : # coincide con una letra, seguida de al menos 1 dígito entre 3 y 5')

cadena = 'a4123'
print('\ndato a verificar: ' ,cadena)
print(regex.match(cadena))
print(regex.search(cadena))

cadena2 = 'a7345'
print('\ndato a verificar: ',cadena2) 
print(regex.match(cadena2))
print(regex.search(cadena2))






