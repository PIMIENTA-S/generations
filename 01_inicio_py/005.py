string = input("Ingresa una palabra: ")

vocales = ["a", "e", "i", "o", "u"]
counter = 0


for i in string:
    if i in vocales:
        counter += 1

print(counter)