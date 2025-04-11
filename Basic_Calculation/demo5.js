function onAddition()
{
    let num1=document.getElementById("input1");
    let num2 = document.getElementById("input2");

    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);
    let res= n1+n2;

    let displayData = document.getElementById("result");
    displayData.innerHTML =`<h2>Your Result is : ${res} </h2>`
}

function onSubstraction() {
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    if (n1 > n2) {
        let res = n1 - n2;

        let displayData = document.getElementById("result");
        displayData.innerHTML = `<h2>Your Result is: ${res}</h2>`;
    } else {
        alert("Invalid number: The first number must be greater than the second.");
    }
}

function onMultiplication() {
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    if (n1 > n2) {
        let res = n1* n2;

        let displayData = document.getElementById("result");
        displayData.innerHTML = `<h2>Your Result is: ${res}</h2>`;
    } else {
        alert("Invalid number: The first number must be greater than the second.");
    }
}
function onDivision() {
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    if (n1 > n2) {
        let res = n1/n2;

        let displayData = document.getElementById("result");
        displayData.innerHTML = `<h2>Your Result is: ${res}</h2>`;
    } else {
        alert("Invalid number: The first number must be greater than the second.");
    }
}
/*
function onDataChange()
{
    let name=document.getElementById("myName");
    name.style.background="green";
    name.style.color="white";
}
*/


