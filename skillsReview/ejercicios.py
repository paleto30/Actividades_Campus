""" 
2. En la jerarquía de operadores, cuáles son los que más
prioridad tienen cuando el intérprete de Python los evalúa?

"""
# primer grado
print('\nEn la jerarquía de operadores, cuáles son \nlos que más prioridad tienen cuando el intérprete de Python los evalúa?\n')
print('1) las operaciones entre  (  ) tienen la mayor prioridad')
print(f'ejemplo:\n {12} * {4} + ({4} * {3}) = ',(12 * 4 + (4 * 3)),'\n')

# segundo grado
print('2) las potencias tienen el segundo grado de prioridad\nejemplo:')
print(f'{6} ** {2} + {4}  = {6**2+4}\n' )

# tercer grado
print('3) Multiplicacion y division, modulo o residuo, division entera,\ntienen el tercer grado de prioridad\n')
print(f'ejemplo\n{10} * {6} / {2} // {5} % {2} = {10*6/2//5%2}')

print(f'{10} * {6} = {10*6}')
print(f'{10*6} / {2} = {10*6/2}')
print(f'{10*6/2} // {5} = {10*6/2//5}')
print(f'{10*6/2//5} % {2} = {10*6/2//5%2}\n')


# cuarto grado 
print('4) la suma y la resta tienen el cuarto grado de prioridad\nejemplo')
print(f'{2} * {5} + {4} = {2*5+4} , como vemos primero multiplica y luego hace la suma\nesto es por que le da prioridad a la multiplicacion y luego a la suma')
print('\nel mismo ejemplo anterior pero esta vez con resta\n')
print(f'{2} * {5} - {4} = {2*5-4} , como vemos primero multiplica y luego hace la suma\nesto es por que le da prioridad a la multiplicacion y luego a la sresta\n')


# quinto grado 
print('5) los Operadores relacionales tienen el 5 grado de prioridad\n-menor que: <\n-menor igual que: <=\n-mayor que: >\n-mayor igual que: >=')
print('-diferente de: !=\n igual igual que: ==\n')
print('ejemplo:\n')
num1, num2 = 20, 30
print(f'numero 1 = {num1},  numero 2 = {num2}\n{num1} < {num2} = {num1 < num2}')
print(f'\n{num1} <= {num2} = {num1 <= num2}')
print(f'\n{num1} > {num2} = {num1 > num2}')
print(f'\n{num1} >= {num2} = {num1 >= num2}')
print(f'\n{num1} != {num2} = {num1 != num2}')
print(f'\n{num1} == {num2} = {num1 == num2}')


#sexto grado

print('\n\n6) operador logico AND tiene el sexto grado de prioridad\nejemplos:)')
print(f'supongamos que tenemos dos numeros:\nnumero1 = {5}\nnumero2 = {8}\n')
print(f'ahora se tiene que cumplir la siguiente condicion:\nsi numero1 Y numero2 son multiplos de 2\nentonces la respuesta debe ser True:\n')
respuesta = None
if 5 % 2 == 0 and 8 % 2 == 0 :
    respuesta = True
else:
    respuesta = False
print(f'si {5} % 2 == 0 and {8} % 2 == 0\nrespuesta: {respuesta}\n')
print('como vemos la respuesta es falsa, ya que 5 no es multiplo de 2.\ntambien notamos que primero se realizan las operaciones y luego la verificacoon del operador AND')