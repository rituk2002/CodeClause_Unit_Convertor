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

    if(inputTypeValue === "sec" && resultTypeValue=== "sec")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "sec" && resultTypeValue=== "min")
     result.value = Number(input.value)*0.0166667;
     if(inputTypeValue === "sec" && resultTypeValue=== "hr")
     result.value = Number(input.value)*0.000277778;
     if(inputTypeValue === "sec" && resultTypeValue=== "day")
     result.value = Number(input.value)*1.1574e-5;

     if(inputTypeValue === "min" && resultTypeValue=== "sec")
     result.value = Number(input.value)*60;
     if(inputTypeValue === "min" && resultTypeValue=== "min")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "min" && resultTypeValue=== "hr")
     result.value = Number(input.value)*0.0166667;
     if(inputTypeValue === "min" && resultTypeValue=== "day")
     result.value = Number(input.value)*0.000694444;

     if(inputTypeValue === "hr" && resultTypeValue=== "sec")
     result.value = Number(input.value)*3600;
     if(inputTypeValue === "hr" && resultTypeValue=== "min")
     result.value = Number(input.value)*60;
     if(inputTypeValue === "hr" && resultTypeValue=== "hr")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "hr" && resultTypeValue=== "day")
     result.value = Number(input.value)*0.0416667;

     if(inputTypeValue === "day" && resultTypeValue=== "sec")
     result.value = Number(input.value)*86400;
     if(inputTypeValue === "day" && resultTypeValue=== "min")
     result.value = Number(input.value)*1440;
     if(inputTypeValue === "day" && resultTypeValue=== "hr")
     result.value = Number(input.value)*24;
     if(inputTypeValue === "day" && resultTypeValue=== "day")
     result.value = Number(input.value)*1;

     
     
}
