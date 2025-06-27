function add (num1,num2){

    return num1+num2;
}
function substract (num1,num2){

    return num1-num2;
}
function multiply (num1,num2){

    return num1*num2;
}
function divison (num1,num2){

    return num1/num2;
}

function calculator (a,b,operation){
    if(operation === "add"){
        const result = add(a,b);
        return result;
    }
    else if (operation === 'substract'){
        const result = substract(a,b);
        return result;
    }
    else if (operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if (operation === 'division'){
        const result = divison(a,b);
        return result;
    }
    else {
        return "operation is not allowed";
    }
}

const result =  calculator(6,7,"multiply");
console.log(result);