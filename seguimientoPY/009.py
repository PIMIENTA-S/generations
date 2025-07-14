import random as r

adivinar = r.randint(1,10)

num = int(input("Ingresa un numero: "))

while num != adivinar:
    if num <= adivinar:
        print("Muy bajo")
        num = int(input("Ingresa un numero: "))
        
    else:
        print("Muy alto")
        num = int(input("Ingresa un numero: "))

print("Lo adivinaste!")