//Дз №2 задача 3

let number  = parseInt(prompt('Введите целое число, лежащее в диапазоне от -999 до 999.', '-999 до 999'))
	if (number==0){
		alert("Это ноль")
	}
	else if(number<0 && number> -10){
		alert ("Отрицательное однозначное число")
	}
	else if (number<-9 && number >-100){
		alert ("отрицательное двузначное число")
	}
	else if(number<-99 && number >-1000){
		alert("отрицательное трехзначное число")
	}
	else if(number>0 && number< 10){
		alert ("Положительное однозначное число")
	}
	else if (number>9 && number <100){
		alert ("Положительное двузначное число")
	}
	else if(number>99 && number < 1000){
		alert("Положительное трехзначное число")
	}

	// Задача №4
	
	for (let i = 1; i <= 100; i++) {
		if (i%3 == 0 && i%5 == 0) console.log("ThreeFive") 
			else {
			if (i%3 == 0) console.log("Three") 
			else {
			if (i%5 == 0) console.log("Five")
			else console.log(i)
				} 			
			}
		
	}
	