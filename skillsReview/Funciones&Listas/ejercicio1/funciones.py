from camperModel import ClassCamper
from os import system
from time import sleep


def imprimirMenuPrincipal():
    print('-------------------------MENU-------------------------\n')
    print('[1] CREAR GRUPO ARTEMIS')
    print('[2] CREAR GRUPO SPUTNIK\n')
    print('[0] SALIR\n')
    opc = int(input('   --: '))
    return opc


def menuParaGrupo(grupo):
    print('-------------------------MENU-------------------------\n')
    print(f'   [1.1] LISTAR CAMPERS DE {grupo}')
    print(f'   [1.2] AGREGAR CAMPERS DE {grupo}')
    print(f'   [1.3] ELIMINAR CAMPERS DE {grupo}')
    print(f'   [1.4] ORDENAR ALFABETICAMENTE EN LISTA DE {grupo}')
    print(f'   [1.5] BUSCAR CAMPERS DE {grupo}\n')
    print('   [ 0 ] <- REGRESAR\n')
    opc = float(input('   --: '))
    return opc


def listarRegistros(lista):
        count = 0
        for i in lista:
            print('--------------------------------')
            print(f'          Registro #{count+1}')
            print('--------------------------------')
            print(i)
            print('')
            count+=1
 

def AgregarCamper(lista):
    id = str(input('Ingrese la cedula: '))
    nombre = str(input('Ingrese el nombre: '))
    edad = str(input('Ingrese la edad: '))
    telefono = str(input('Ingrese el telefono: '))    
    camper = ClassCamper(id,nombre,edad,telefono)
    lista.append(camper)


def eliminarCamper(lista):
    print('Ingrese la cedula del camper a eliminar')
    id = str(input('--: '))
    for i in lista:
        if id == i.getCedula:
            lista.remove(i)


def ordenAlfababetico(lista):
    count = 0
    orderList = sorted(lista, key=lambda x: x._nombre)
    for i in orderList:
            print('--------------------------------')
            print(f'          Registro #{count+1}')
            print('--------------------------------')
            print(i)
            print('')
            count+=1

def BuscarCamper(lista):
    opc = int(input('Buscar\n[1] Por cedula\n[2] Por Nombre\n--: '))
    if opc == 1: 
        id = str(input('Ingrese la cedula a buscar: '))
        for i in lista:
            if i.getCedula == id:
                print('\n--------------------------------')
                print(i)
                print('--------------------------------\n')
    
    elif opc == 2:
        nom = str(input('Ingrese el Nombre a buscar: '))
        for i in lista:
            if i.getNombre == nom:
                print('\n--------------------------------')
                print(i)
                print('--------------------------------\n')



def Funcionalidad(lista, grupo):
    flag2 = True
    while flag2 == True:
        system('clear')
        opc = menuParaGrupo(grupo)
        if opc == 1.1:
            system('clear')
            print(f'----------------- LISTADO DE {grupo} -----------------\n')
            listarRegistros(lista)
            evento = str(input('\nEnter para Regresar'))
        elif opc == 1.2:
            flag3 = True
            while flag3 == True:
                system('clear')
                print(f'----------------- AGREGAR {grupo} -----------------\n')
                AgregarCamper(lista)
                opcc = str(input('\nDesea Hacer otro registro ? [s/n]: '))
                if opcc == 'n':
                    flag3 = False
                elif opcc != 's' :      
                    print('\n¡¡ Error !!\nopcion invalida.')
                    sleep(2)
                    flag3 = False
        elif opc == 1.3:
            flag4 = True
            while flag4 == True:
                system('clear')
                print('----------------- BORRAR CAMPERS -----------------\n')
                listarRegistros(lista)
                eliminarCamper(lista)
                opcc = str(input('\nDesea Borrar otro registro ? [s/n]: '))
                if opcc == 'n':
                    flag4 = False
                elif opcc != 's' :      
                    print('\n¡¡ Error !!\nopcion invalida.')
                    sleep(2)
                    flag4 = False
        elif opc == 1.4:
            system('clear')
            print(f'----------------- LISTADO DE {grupo} ORDENADO -----------------\n')
            ordenAlfababetico(lista)
            evento = str(input('\nEnter para Regresar'))
        elif opc == 1.5:
            system('clear')
            flag5 = True
            while flag5 == True:
                system('clear')
                print(f'----------------- BUSCAR CAMPER DE {grupo} -----------------\n')
                BuscarCamper(lista)
                opcc = str(input('\nDesea Buscar otro registro ? [s/n]: '))
                if opcc == 'n':
                    flag5 = False
                elif opcc != 's' :      
                    print('\n¡¡ Error !!\nopcion invalida.')
                    sleep(2)
                    flag5 = False
        elif opc == 0:
            flag2 = False