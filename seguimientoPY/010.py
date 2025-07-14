num = int(input("Ingrese un numero: "))


primo = True
for i in range(2, num):
    if num % i == 0:
        primo = False
        break

if primo:
    print("Numero primo")
else:
    print("No primo")