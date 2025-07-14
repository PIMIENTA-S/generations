def contar_palabras(p):
    count = 1
    for i in p:
        if i == " ":
            count += 1
    return count

string = input("Ingresa una oracion: ")

print(f"la oracion tiene {contar_palabras(string)} palabras")