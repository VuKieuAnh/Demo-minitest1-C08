const MUC2 = 1.734;
const MUC1= 1.678;
const MUC3 = 2.014;

function getMoney(){
    let number1 = document.getElementById("old").value;
    let number2 = document.getElementById("new").value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    let result = number2 - number1;
    let money=0;
    if (result<=50){
        money = result*MUC1;
        console.log("khoang 1");
    }
    else {
        if (result<=100){
            money = 50*MUC1 + (result - 50)*MUC2;
            console.log("khoang 2");
        }
        else {
            money = 50*MUC1 + 50*MUC2 + (result-100)*MUC3;
            console.log("khoang 3");
        }
    }
    document.getElementById("result").innerText = money;
}
