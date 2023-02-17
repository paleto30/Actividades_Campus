""" 
Ejerciocio #3. 

En pocos días comienza la vuelta a España y la federación
colombiana de ciclismo, como incentivo ha determinado pagar
un valor adicional. El programa pedirá por teclado el sueldo
básico por kilometro recorrido, el número de kilómetros
recorridos durante toda la vuelta, numero de kilómetros
recorridos con la camiseta de líder.
Calcular el valor a pagar total, si se sabe que si recorre en la
bici más de 1800 kilómetros con la camiseta de líder, esos
kilómetros se consideran especiales y tendrán un recargo de
25%.
El total de kilómetros por recorrer durante toda la vuelta serán
3.277 kilómetros,el ganador de la vuelta a España recibirá 700
millones de pesos. 
"""

from os import system
from time import sleep
import pandas as pd


#==================================================================== clase PagoCiclista
class PagoCiclista:

    def __init__(self, id, nombre, sb_km_recorrido, km_rec_vuelta,km_rec_Calider ):
        self._id = int(id)
        self._nombre = str(nombre)
        self._sb_km_recorrido = float(sb_km_recorrido)
        self._km_rec_vuelta = float(km_rec_vuelta)
        self._km_rec_Calider = float(km_rec_Calider)
        self._vlr_pagar_total = float(0)

    @property
    def getId(self):
        return self._id
    
    @property
    def getNombre(self):
        return self._nombre
    
    @property
    def getSB_KM_R(self):
        return self._sb_km_recorrido
    @property
    def getKM_R_V(self):
        return self._km_rec_vuelta

    @property
    def getKM_R_CL(self):
        return self._km_rec_Calider


    @property
    def getVLR_TOTAL(self):
        return self._vlr_pagar_total

    @getVLR_TOTAL.setter
    def setVLR_TOTAL(self,vlr_pagar_total):
        self._vlr_pagar_total = vlr_pagar_total

    def CalcularSueldo(self):
        vlrTotal = 0
        vlrRecargo = 0
        if self._km_rec_Calider > 1800:
            vlrRecargo = (self._km_rec_Calider*self._sb_km_recorrido)*.25
            vlrTotal = (self._sb_km_recorrido*self._km_rec_vuelta)+vlrRecargo 
            return vlrTotal
        else:
            vlrTotal = (self._sb_km_recorrido*self._km_rec_vuelta)+vlrRecargo
            return vlrTotal
    
    def __str__(self):
        return 'ID: {}\nNombre: {}\nSueldo basico por km recorrido: {}\nKm recorridos en toda la vuelta: {}\nKm recorridos con Camisa lider: {}\nValor total a pagar: {}'.format(self._id, self._nombre ,self._sb_km_recorrido, self._km_rec_vuelta, self._km_rec_Calider, self._vlr_pagar_total)

#============================================================================================================================================================================================================================================
#          funciones para la usabilidad

def registrarDatos(lista):
    flag1 = True
    while flag1 == True:
        system('clear')
        print('\n\n         [ VUELTA A ESPAÑA ]         \n\n  > Registrar Ciclista\n')
        try:
            id = int(input('ID de Ciclista: '))
            nombre = str(input('\nNombre de Ciclista: '))
            sueldoPkR = float(input('\nSueldo basico por km recorrido: $'))
            kmRvuelta = float(input('\nNumero de km recorridos en toda la vuelta: '))
            kmRClider = float(input('\nNumero de km recorridos con camiseta lider: '))
            objeto = PagoCiclista(id,nombre,sueldoPkR,kmRvuelta,kmRClider)
            vlr = objeto.CalcularSueldo()
            objeto.setVLR_TOTAL = vlr
            lista.append(objeto)
            #print(Registros)
            mas = str(input('\n\nHacer otro registro ? [s/n]: '))
            if mas == 'n':
                flag1 = False
            elif mas != 's':
                print('Opcion invalida\nIngrese las opciones validas!')
                sleep(1)
                flag1 = False
        except:
            system('clear')
            print('Algo salio mal\nIntenta nuevamente.')
            sleep(1)


def mostrarListado(lista):
    ids,names,vlrkm,mkR,kmRCL,vltp = [],[],[],[],[],[]
    for i in lista:
        ids.append(i.getId)
        names.append(i.getNombre)
        vlrkm.append(i.getSB_KM_R)
        mkR.append(i.getKM_R_V)
        kmRCL.append(i.getKM_R_CL)
        vltp.append(i.getVLR_TOTAL)
    df = pd.DataFrame({'ID':ids,'NOMBRES':names,'VALOR_POR_KM':vlrkm,'KM_RECORRIDOS_T':mkR,'KM_RECORRIDOS_CL':kmRCL,'VALOR_PAGAR_TOTAL':vltp})
    print(df)


def mostrarGanador(lista):
    ids,names,vlrkm,mkR,kmRCL,vltp = [],[],[],[],[],[]
    for i in lista:
        ids.append(i.getId)
        names.append(i.getNombre)
        vlrkm.append(i.getSB_KM_R)
        mkR.append(i.getKM_R_V)
        kmRCL.append(i.getKM_R_CL)
        vltp.append(i.getVLR_TOTAL)
    df = pd.DataFrame({'ID':ids,'NOMBRES':names,'VALOR_POR_KM':vlrkm,'KM_RECORRIDOS_T':mkR,'KM_RECORRIDOS_CL':kmRCL,'VALOR_PAGAR_TOTAL':vltp})
    
    print('\n\n\n               [ PODIUM DE LA VUELTA ESPAÑA ]\n\n      > PODIUM\n\n')
    df_mejor = df.sort_values(by=['KM_RECORRIDOS_T','KM_RECORRIDOS_CL'], ascending=False)
    df_podio =  df_mejor.head(3)
    lista = [1,2,3]
    df_podio.insert(0,'POSICIONES',lista)
    df_Index = df_podio.set_index('POSICIONES')
    print(df_Index)
    print('\n------------------------------------------------------------------------------------------------------')

    winner = df_Index.head(1)
    print('\n\n\n               [ GANADOR ]\n\n')
    print(winner)
    print('\n\n--------¡¡ GANADOR DE 700 MILLONES DE PESOS !!----------\n\n')


# ==============================================================================================================================================================================
#   main 

Registros = []


if __name__ == '__main__':

    flag = True
    while flag == True:
        system('clear')
        try:
            print('\n\n         [ VUELTA A ESPAÑA ]         \n\n[ 1 ] Registrar Datos de ciclista\n[ 2 ] Listado de Ciclistas y resultados\n[ 3 ] Podium y Ganador\n\n[ 9 ] salir')
            opc = int(input('   \n--: '))

            if opc == 1: 
                registrarDatos(Registros)
            elif opc == 2:
                system('clear')
                print('\n\n         [ VUELTA A ESPAÑA ]         \n\n   > listado\n')
                mostrarListado(Registros)
                event = input('\n\nPrecione Espacio para regresar')
            elif opc == 3:
                system('clear')
                mostrarGanador(Registros)
                event = input('\n\nPrecione Espacio para regresar')
            elif opc == 9:
                system('clear')
                print('Cerrando...')
                sleep(1.3)
                flag = False
                system('clear')
            else:                   
                system('clear')
                print('Error...\nLa opcion que ingreso es invalida')
        except:
            system('clear')
            print('Algo ha salido mal')
            sleep(1.3)