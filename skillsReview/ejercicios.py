""" 
Ejercicio 7

Cuál es la diferencia entre un condicional simple y un
condicional compuesto?
"""


print('La diferencia entre un condicional simple y uno compuesto es:\n')
print('el simple solo tiene una opcion, se cumple esa condicion y sucede algo o no pasa nada\n ejemplo')

n1,n2 = 2,20
mensaje = ''
if n2 % n1 == 0 :
    mensaje = 'se cumple'
print(f'teniendo:\nnum1 = {n1}\nnum2= {n2}\n')
print(f'si {n2} modulador {n1} == 0 .   mensaje = {mensaje}')

print('-----------------------------------------------------------------------------\n')
print('Cuando tenemos un condicional compuesto, hay varias opciones \nque pueden cumplirse y cada una de ellas si se cumple ejecuta\nuna serie de opciones especificas.')
print('\npor ejemplo:\n')


if n2 % n1 == 0:
    mensaje = 'EL numero es par'
else:
    mensaje = 'El mumero es impar' 


print(f'teniendo:\nnum1 = {n1}\nnum2= {n2}\n')
print(f'si {n2} modulador {n1} == 0 .   mensaje = {mensaje}') 