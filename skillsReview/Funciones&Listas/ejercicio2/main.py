""" 
Ejercicio #2. 

N atletas han pasado a finales en salto triple en los juegos
olímpicos de 2022.

Diseñe un programa que pida por teclado los nombres de cada
atleta finalista y a su vez, sus marcas del salto en metros.

Informar el nombre de la atleta campeona que se quede
con la medalla de oro y si rompió récord, reportar el pago que
será de 500 millones. El récord esta en 15,50 metros.
"""


## OJO......  se necesita pandas para correr este ejercicio 

from os import system
from time import sleep
import pandas as pd


# clase para el atleta ========================================================================================================
class Atleta:
   
    def __init__(self, nombre, marcaSalto ):
        self._nombre = nombre
        self._marcaSalto = marcaSalto

    @property
    def getNombre(self):
        return self._nombre

    @property
    def getMarcaSalto(self):
        return self._marcaSalto

    def __str__(self):
        
        return 'Nombre: {}\nMarca: {}'.format(self._nombre, self._marcaSalto)

 
# Funciones ========================================================================================================================
# funcion de registro
def registrarAtletas(lista):
    flag1 = True
    while flag1 == True: 
        print('--------------------Registrar atletas y marcas--------------------\n')
        print('< Registrar >\n')
        try:
            nombre = str(input('Nombre de Atleta: '))
            marca = float(input('Ingrese la Marca en metros: '))
            atleta = Atleta(nombre,marca)
            lista.append(atleta)
            opc = str(input('\n\nAgregar otro Atleta? [s/n]: '))
            if opc == 'n':
                flag1 = False
            elif opc != 's':
                flag1 = False
                system('clear') 
                print(f'\nLa opcion {opc} es invalida. indique: [s/n]')
                sleep(1.3)
            system('clear')
        except:
            system('clear')
            print('\n\nesta ingresando algo mal\nIntente de nuevo.')
            sleep(1.5)
            system('clear')

# funcion para imprimir
def ListarRegistros(listado):

    nombres = []
    marcas  = []
    for i in listado:
        nombres.append(i.getNombre)
        marcas.append(i.getMarcaSalto)

    serieN = pd.Series(nombres)
    serieM = pd.Series(marcas)
    
    df = pd.DataFrame({'Altetas':serieN,'Marcas':serieM})
    print(df,'\n\n\n')
    enter = str(input('Presione enter para regresar al menu Principal'))
    sleep(0.6)
    system('clear')

# funcion para mostrar el PODIUM  y si alguien rompio el record 
def MostrarPodium(listado):
    nombres = []
    marcas  = []
    for i in listado:
        nombres.append(i.getNombre)
        marcas.append(i.getMarcaSalto)
    serieN = pd.Series(nombres)
    serieM = pd.Series(marcas)
    df = pd.DataFrame({'Atletas':serieN,'Marcas':serieM})
    dfPodio = df.sort_values(by='Marcas', ascending=False)
    dfFInal =  dfPodio.head(3)
    lista = [1,2,3]
    dfFInal.insert(0,'Posicion',lista)
    podioIndex = dfFInal.set_index('Posicion')
    print('\n-------- PODIUM -------------------------------\n')
    print(podioIndex)
    
    record = podioIndex.loc[podioIndex['Marcas'] > 15.50 ]
    if record.empty != True:
        print('\n\n\n-------- Atletas que rompieron el record --------\n\n > Récord Actual: 15.50\n')
        print(record)

        enter = str(input('\n\nPresione enter para regresar al menu Principal'))
        sleep(0.6)
        system('clear')



# main 
#==================================================================================================================================================================
listado = []

if __name__ == '__main__':

    flag = True 
    while flag == True:
        try:
            print('Programa para calcular el Ganador de salto triple\n\n[ 1 ] Registrar Atletas\n[ 2 ] Revisar Registros\n[ 3 ] Podium\n[ 4 ] Salir\n')
            op = int(input('--: '))
            if op == 1 :
                system('clear')
                registrarAtletas(listado)
            elif op == 2:
                system('clear')
                print('-------------------- Registros --------------------\n')
                ListarRegistros(listado)
            elif op == 3:
                system('clear')
                MostrarPodium(listado)

            elif op == 4:
                flag = False
            else:
                system('clear')
                print('Opcion invalida !!')
                sleep(2)
                system('clear')
        except:
            system('clear')
            print('A cometido algun error !!\nIntente de nuevo')
            sleep(2)
            system('clear')