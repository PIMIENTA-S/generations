def palindromo(p):
    return p == p[::-1]

cadena = input("Ingrese palabra: ")
if palindromo(cadena):
    print("Palindromo")
else:
    print("No palindromo")