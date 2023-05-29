var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('InputType');
var resultType = document.getElementById('ResultType');
var inputTypeValue , resultTypeValue ;

input.addEventListener("keyup",myresult);
inputType.addEventListener("change",myresult);
resultType.addEventListener("change",myresult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myresult()
{
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "c" && resultTypeValue=== "c")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "c" && resultTypeValue=== "f")
     result.value = Number(input.value)*9/5 + 32;
     if(inputTypeValue === "c" && resultTypeValue=== "k")
     result.value = Number(input.value)+273;

     if(inputTypeValue === "f" && resultTypeValue=== "c")
     result.value = (Number(input.value)-32)*5/9;
     if(inputTypeValue === "f" && resultTypeValue=== "f")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "f" && resultTypeValue=== "k")
     result.value = Number(input.value)*5/9 + 459;

     if(inputTypeValue === "k" && resultTypeValue=== "c")
     result.value = Number(input.value)-273;
     if(inputTypeValue === "k" && resultTypeValue=== "f")
     result.value = (Number(input.value)-459)*5/9;
     if(inputTypeValue === "k" && resultTypeValue=== "k")
     result.value = Number(input.value)*1;

     
     
}
