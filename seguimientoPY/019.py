def perfectos():
    divisores = []
    for i in range(1, 1001):
        for j in range(1, i):
            if i % j == 0:
                divisores.append(j)
        if sum(divisores) == i:
            print(f"Numero perfecto {i}")
        divisores = []

perfectos()