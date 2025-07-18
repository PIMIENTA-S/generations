
# 1. Respuestas informativas (100–199),
# 2. Respuestas satisfactorias (200–299),
# 3. Redirecciones (300–399),
# 4. Errores de los clientes (400–499),
# 5. Errores de los servidores (500–599).


import json
import requests

response = requests.get("http://numbersapi.com/42?json")

trivia = json.loads(response.content)
# trivia = response.json()

print(trivia)

print(json.dumps(trivia, indent=4))

print(trivia["text"])
