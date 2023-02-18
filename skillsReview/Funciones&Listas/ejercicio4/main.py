""" 
ejercicio 4. 

Una empresa tiene 500 almacenes. Cada almacén debe
reportar el nombre y 5 registros c/u, contiene el tipo de articulo
y el número de unidades vendidas de ese artículo.

Haga un programa en Python para determinar cuál fue el
almacén que mas vendió, cual fue el articulo más vendido de
ese almacén y cual el más vendido en general.
"""

import random
import json

almacenes = {}  # en este diccionario se almacenan los 500 almacenes
sumatoria_productos = {} # en este diccionario se almacenan el nombre y la cantidad total de productos vendida por cada almacen
articulos_mas_vendidos = {}

# ciclos para crear  los 500 almacenes
for i in range(500):
    cantidad = []
    no_repet = []
    for e in range(7):
        r = random.randint(1,100)
        if r not in cantidad:
            cantidad.append(r)
    no_repet = random.sample(cantidad, 5)
    almacenes[f'Almacen{i+1}'] = {'registros':{'televisor':no_repet[0],'computador':no_repet[1],'audifonos':no_repet[2],'monitor':no_repet[3],'mouse':no_repet[4]}} 
#print(json.dumps(almacenes,indent=4))


## ciclos para hallar la sumatoria de productos vendidos por cada almacen 
i = 0
for almacen, datos in almacenes.items():
    #print('{} : {}'.format(datos['nombre'], datos['registros']))
    cantidad = 0
    suma = 0
    for key , value in datos['registros'].items():
        #print(key,':', value )
        suma += value
    cantidad = suma
    sumatoria_productos[almacen]=cantidad
    i+=1
#print(sumatoria_productos) 

# para obtener el nombre del almacen que masventas tuvo
comparador = max(sumatoria_productos,key=sumatoria_productos.get)
for k,v in sumatoria_productos.items():
    if k == comparador:
        print('\nEl almacen que mas vendio fue:\n\n   > {}\n\nTotal de articulos vendidos: {}\n'.format(k,v))
    
## para obtener el articulo mas vendido en el almacen que mas vendio     
almacen_mas_vendio = ''
for k,v  in almacenes.items():
    if k == comparador:
        almacen_mas_vendio = k
        print('   > Articulos:\n')
        for key , value in v['registros'].items():
            print(key,':',value)
            articulos_mas_vendidos[key]=value
            
mas_vendido = max(articulos_mas_vendidos, key=articulos_mas_vendidos.get) 
print(f'\nEl Articulo  mas vendido del almacen {almacen_mas_vendio} fue:\n\n   > {mas_vendido}')

# el almacen mas vendido a nivel general 
total_televisor = 0
total_computador = 0
total_audifonos = 0
total_monitor = 0
total_mouse = 0
for k,v in almacenes.items():
    #print(v['registros']['mouse'])
    total_televisor += v['registros']['televisor']
    total_computador += v['registros']['computador']
    total_audifonos += v['registros']['audifonos']
    total_monitor += v['registros']['monitor']
    total_mouse += v['registros']['mouse']

# diccionario con el total global de articulos vendidos
total_articulos_global = {
    'televisor':total_televisor,
    'computador':total_computador,
    'audifonos':total_audifonos,
    'monitor':total_monitor,
    'mouse':total_mouse
}

print(f'\nTotal de articulos vendidos globalmente:\n\ntelevisores globales: {total_televisor}\ncomputadores globales: {total_computador}\naudifonos globales: {total_audifonos}\nmonitores globales: {total_monitor}\nmouses globales: {total_mouse}')

# hallar el mas vendido a nivel global
mas_vendido_global = max(total_articulos_global, key=total_articulos_global.get)

for k,v in total_articulos_global.items():
    if k == mas_vendido_global:
        print(f'\nEl Articulo  mas vendido del almacen {almacen_mas_vendio} fue:\n')
        print(f'   > {k}: {v}')