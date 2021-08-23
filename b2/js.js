function getSalary(){
    let numberOfDate = document.getElementById("date").value;
    const NUMBEROFMONTH =22;
    numberOfDate = parseFloat(numberOfDate);
    let level = document.getElementById("level").value;
    let result=0;
    switch (level){
        case "A":
            result=numberOfDate/NUMBEROFMONTH*5000000;
            break;
        case "B":
            result=numberOfDate/NUMBEROFMONTH*6000000;
            break;
        case "C":
            result=numberOfDate/NUMBEROFMONTH*8000000;
            break;
        case "D":
            result=numberOfDate/NUMBEROFMONTH*10000000;
            break;
    }
    document.getElementById("result").innerText = result;
}
