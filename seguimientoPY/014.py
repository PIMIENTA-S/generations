def sumar(l):
    count = 0
    for i in l:
        count += i
    return count

lista_numeros = []

num = int(input("ingrese 0 (cero) para terminar\ningrese numero: "))

while num != 0:
    lista_numeros.append(num)
    num = int(input("ingrese numero: "))

print(f"la suma de los numero es: {sumar(lista_numeros)}")