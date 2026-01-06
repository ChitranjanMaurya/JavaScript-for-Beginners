function multiplication(num){
    for(let i=num; i<=num*10; i+=num){
        console.log(i);
    }
}

function printTable(n){
    for(i=1;i<=10;i++){
        j=i*n;
        console.log(j);
    }
}

multiplication(3);

printTable(4);
// functions that return the sum of numbers from 1 to n
function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(getSum(3));

// Concatenation of Strings
let str = ["hii","hello", "bye", "!"];
let result = "";
function concat(str){
    for(let i=0; i<str.length;i++){
        result +=str[i];
    }
    return result;
}

console.log(concat(str));