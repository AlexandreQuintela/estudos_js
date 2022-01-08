
function numerosPares(arr){
    let pares = [];
    let impares = [];
    for (let i = 0;  i<arr.length; i++){
        if (arr[i] % 2 === 0) {
            pares.push(arr[i]);
        }else{
            impares.push(arr[i]);
        }
    }
    console.log("Números pares: ", pares)
    console.log("Números impares: ", impares)
}

let arr = [2,4,5,6,7,8,9,10];
numerosPares(arr);