
from funciones import imprimirMenuPrincipal , Funcionalidad
from os import system



listaArtemis = [ ] 
listaSputnik = [ ]


if __name__ == '__main__':
        
    flag = True
    while flag == True:
        opcion = imprimirMenuPrincipal()
        if opcion == 1:
           Funcionalidad(listaArtemis,'ARTEMIS')
        elif opcion == 2:
            Funcionalidad(listaSputnik,'SPUTNIK')
        elif opcion == 0:
            flag = False
        else:
            print('ERROR !!!\nOpcion Invalida ...')
        system('clear') 





        