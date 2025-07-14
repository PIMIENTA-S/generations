while True:
    print()
    print("(1) Calcular el cuadrado de un número.")
    print("(2) Mostrar números pares entre dos valores.")
    print("(3) Salir del programa.")
    opcion = int(input("> "))
    if opcion == 1:
        numero = int(input("Ingresa un numero: "))
        print(f"El cuadrado del numero es {numero**2}")
    elif opcion == 2:
        num1 = int(input("Ingresa un numero: "))
        num2 = int(input("Ingresa un numero: "))
        lista = []
        for i in range(num1, num2+1):
            if i % 2 == 0:
                lista.append(i)
        print(f"Los numero pares entre los valores {num1, num2} - {lista}")
    elif opcion == 3:
        print("Saliste del programa")
        break
    else:
        print("Ingresa un numero correcto")
    
