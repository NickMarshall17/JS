// Задание №1

let month = prompt('Введите номер месяца в году...', 12)

if (month == "12" || month == "1" || month == "2") {
    alert('Сейчас зима')
}
if (month == "3" || month == "4" || month == "5") {
    alert('Сейчас весна')
}
if (month == "6" || month == "7" || month == "8") {
    alert('Сейчас лето')
}
if (month == "9" || month == "10" || month == "11") {
    alert('Сейчас осень')
}


// Задание №2

let lenght = +prompt('Введите еденицу длины: ' + '1 - дециметр, 2 - километр, 3 - метр, 4 — миллиметр, 5 — сантиметр.', 2)

let L = +prompt(" Введите длину", 10)
switch (lenght) {
    case 1: // дециметр 
        alert(L * 0.1 + "метров")
        break
    case 2: // километр 
        alert(L * 1000 + "метров")
        break
    case 3: // метр 
        alert(L + "метров")
        break
    case 4: // миллиметр 
        alert(L * 0.001 + "метров")
        break
    case 5: // сантиметр 
        alert(L * 0.01 + "метров")
        break
    default:
        alert("Вы ввели не число!")
}