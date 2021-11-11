/*3-
arr = [10, "20", 30, "40", 50]
verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
a number
output => [10, 20, 30, 40, 50]*/

let arr = [10, "20", 30, "40", 50];

for(let i=0, long=arr.length; i<long; i++){
    if("number"!==typeof arr[i]){
        arr[i]=+arr[i];
    }
}
console.log(arr);