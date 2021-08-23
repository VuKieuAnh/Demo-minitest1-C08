function getMoney(){
    let number1 = document.getElementById("old").value;
    let number2 = document.getElementById("new").value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    let result = number2 - number1;
    let money=0;
    if (result<=50){
        money = result*1.678;
        console.log("khoang 1");
    }
    else {
        if (result<=100){
            money = 50*1.678 + (result - 50)*1.734;
            console.log("khoang 2");
        }
        else {
            money = 50*1.678 + 50*1.743 + (result-100)*2.014;
            console.log("khoang 3");
        }
    }
    document.getElementById("result").innerText = money;
}
