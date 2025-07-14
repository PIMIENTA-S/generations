def reverso(p):
    return p[::-1]

string = input("Ingrese una palabra: ")
print(f"{string} es ahora {reverso(string)}")