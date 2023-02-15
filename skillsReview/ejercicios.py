""" 
Ejercicio 10. 

En su casa le solicitan que realice un algoritmo en Python,
que permita calcular el valor a pagar por concepto de
energía eléctrica. Los datos que se conocen son los
siguientes:
- Mes de consumo - Valor kw
-Total kw consumido en el mes - estrato
"""

""" valor de kw por estrato """
import os

vlKwEs1 = 233.58
vlKwEs2 = 291.98
vlKwEs3 = 496.37
vlKwEs4 = 583.97
vlKwEs5y6 = 700.76 

def calcuarVlrTotal(estrato,totalKw):
    vlrTotal = 0 

    if estrato == 1:
        vlrTotal = totalKw * vlKwEs1
    elif estrato == 2:
        vlrTotal = totalKw * vlKwEs2
    elif estrato == 3:
        vlrTotal = totalKw * vlKwEs3
    elif estrato == 4:
        vlrTotal = totalKw * vlKwEs4
    elif estrato == 5 or estrato == 6:
        vlrTotal = totalKw * vlKwEs5y6
    
    return vlrTotal


flag = True
while flag == True:

    print('[1] calcular el valor del recibo energetico\n[2] salir')
    opc = int(input('--: '))

    if opc == 1:
        os.system('clear')
        print('\neste programa calcula el valor a pagar \npor el consumo de energia electrica\n')
        print('segun el estrato social:\nestrato 1\nestrato 2\nestrato 3\nestrato 4\nestrato 5 y 6\n')
        estrato = int(input('Ingrese el estrato: '))
        mes = str(input('Mes de consumo: '))
        totalKw = int(input('Kw consumidos en el mes: '))
        os.system('clear')
        totalPagar = calcuarVlrTotal(estrato,totalKw)
        print(f'\n\nMes: {mes}\nKw consumidos en el mes: {totalKw}\nEl valor Total a pagar es de : ${totalPagar}')
        print('\n\n')
    elif opc == 2:

        flag = False
    
    else:
        print('la opcion que ingrso es invalida !!...')