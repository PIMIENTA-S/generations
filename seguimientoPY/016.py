def fibonacci(a):
    num1 = 0
    num2 = 1
    coun = 0
    while coun < a:
        print(num1)
        siguiente = (num1 + num2)
        num1 = num2
        num2 = siguiente
        coun += 1


a = 5
fibonacci(a)