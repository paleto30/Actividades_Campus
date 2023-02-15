


class ClassCamper:

    def __init__(self, cedula, nombre, edad, telefono) :
        self._cedula = cedula
        self._nombre = nombre
        self._edad = edad
        self._telefono = telefono
    

    @property
    def getCedula(self):
        return self._cedula
    
    @property
    def getNombre(self):
        return self._nombre

    @property
    def getEdad(self):
        return self._edad

    @property
    def getTelefono(self):
        return self._telefono

    
    def __str__(self) -> str:
        return  'cedula: {}\nnombre: {}\nedad: {}\ntelefono: {}'.format(self._cedula, self._nombre, self._edad,self._telefono)

