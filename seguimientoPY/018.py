def contar(p):
    lista = list(p)
    d = dict.fromkeys(lista, 0)
    for i in lista:
        d[i] += 1
    return d

n = input("Ingresa un palabra")
print(contar(n))