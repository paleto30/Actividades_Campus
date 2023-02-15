
""" 
Ejercicio 8..

Escriba un bloque cualquiera de código en Python en donde
utilice 2 condicionales (if) anidados. 
"""
import os

os.system('clear')
print('--------------UNIX SISTEM--------------\n')


dic = {'user':'paleto','password':'admin123','age':'23','phone':'312312'}
user = str(input('UserName: '))
password = str(input('PassWord: '))


if dic['user'] == user:
    if dic['password'] == password:

        os.system('clear')
        print('--------------UNIX SISTEM--------------\n')
        print('     Welcome the system\n')

        opcion = str(input('[1] watch user active.\n[2] watch info user\n[3] exit\n >'))

        if opcion == '1':
            os.system('clear')
            print('--------------UNIX SISTEM--------------\n')
            print(f'User active is :\n   {dic["user"]}')
        elif opcion == '2':
            os.system('clear')
            print('--------------UNIX SISTEM--------------\n')
            print(f'User info :\n\nuser: {dic["user"]}\nage: {dic["age"]}\nphone: {dic["phone"]}')
        elif opcion == '3':
            os.system('clear')
            print('log out')

    else:
        print('the password is incorrect!')

else:
    print('the username is incorrect!')