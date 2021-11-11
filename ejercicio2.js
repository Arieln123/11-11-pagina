/*2-
Crear una función que acepte un parámetro con los valores desde 1 hasta 5
si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 mostrar del 2 al 10,
teniendo en cuenta el limite es 10
posibles salidas esperadas:
output => 1...10
output => 2...10
output => 3...10
output => 4...10
output => 5...10*/


function numeros(num){
    let total=""
    for(num;num<=10;num++){
    total+=num;       
    }
    console.log(total)
}
for(let i=1;i<=5;i++){
    numeros(i);
}