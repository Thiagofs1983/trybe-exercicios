def soma(num1, num2):
    print(num1 + num2)

soma(1, 2)

""" age = 41
print(age)

names = ['Thiago', 'Barbara'] """

def analyse(text):
    report = ""
    count = len(text.split(" "))

    report += f"Números de palavras = {count}\n"

    char_counter = dict()
    for char in text:
        if char in char_counter:
            char_counter[char] += 1
        else:
            char_counter[char] = 1

    report += f"Números de caracteres = {char_counter}"

    return report

texto_qualquer = ("thiago fonseca de souza")

print(analyse(texto_qualquer))