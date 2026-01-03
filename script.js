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