""" 
Ejercicio 9. 

Construya un algoritmo en Python, que permita ingresar la
información de un empleado e imprima el nombre, los
apellidos y la antigüedad. Los datos que se deben solicitar
son los siguientes:
*Nombre * Teléfono *Año de ingreso a la empresa
*Apellidos *Edad. 
"""


import os

""" funciones =================================================== """
def datosEmpleado():
    dicc = {}
    dicc['nombre']=str(input('Ingrese el nombre:\n--:'))
    dicc['apellido']=str(input('Ingrese el apellido:\n--:'))
    dicc['edad']=str(input('Ingrese la edad:\n--:'))
    dicc['telefono']=str(input('Ingrese el telefono:\n--:'))
    dicc['anio']=str(input('Ingrese año de ingreso:\n--:'))
    empleados.append(dicc)


def imprimirEpleados():
    count = 0
    for i in empleados:
        print(f'--------------------------------\nempleado {count+1}\n--------------------------------\nnombre: {i["nombre"]}\napellidos: {i["apellido"]}\naños Antiguedad: { 2023 - int(i["anio"])}\n')
        count += 1

""" ============================================================= """


empleados = []


flag = True
while flag == True:

    print('-----------------Mennu-----------------\n')
    print('[1] Registrar un empleado')
    print('[2] Listar empleados')
    print('[3] salir') 
    opc = int(input('\n--:'))   

    if opc == 1:
        os.system('clear')
        print('-----------------Registrar-----------------\n')
        datosEmpleado()
    elif opc == 2:
        os.system('clear')
        print('-----------------Listado-----------------\n')
        imprimirEpleados()
    elif opc == 3:
        flag = False
    else:
        print('opcion invalida')