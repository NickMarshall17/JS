//Задание № 1

let a = [12, 4, 3, 10, 1, 20];
let b = [-3, -7, -100, -33];
let c = [];

c = a.concat(b);
console.log(c);
// Задача 2

let area = [1, null, 0, null, 1, null, null, null, null];
let row = "";

for (var i = 0; i < area.length; i++) {
	if (area[i] === 1) row += "<span>X</span>";
	else if (area[i] === 0) row += "<span>0</span>";
	else if (area[i] === null) row += "<span>...</span>";
	if ((i+1) % 3 === 0) row += "<br>";

}

document.write(row)

//Задание № 3

let arr=[12,4,3,10,1,20]
let min=arr[0],
    max=arr[0]

for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
    else if(arr[i]<min){
        min=arr[i];
    }
}
arr.splice(arr.indexOf(max),1)
arr.splice(arr.indexOf(min),1)
console.log(arr);