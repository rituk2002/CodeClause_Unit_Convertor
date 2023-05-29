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

    if(inputTypeValue === "ton" && resultTypeValue=== "kg")
     result.value = Number(input.value)*1000;
     if(inputTypeValue === "ton" && resultTypeValue=== "ton")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "ton" && resultTypeValue=== "g")
     result.value = Number(input.value)*1e+6;
     if(inputTypeValue === "ton" && resultTypeValue=== "pound")
     result.value = Number(input.value)*2204.62;
     if(inputTypeValue === "ton" && resultTypeValue=== "mg")
     result.value = Number(input.value)*1e+9;
    

     if(inputTypeValue === "kg" && resultTypeValue=== "kg")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "kg" && resultTypeValue=== "ton")
     result.value = Number(input.value)*0.001;
     if(inputTypeValue === "kg" && resultTypeValue=== "g")
     result.value = Number(input.value)*1000;
     if(inputTypeValue === "kg" && resultTypeValue=== "pound")
     result.value = Number(input.value)*2.20462;
     if(inputTypeValue === "kg" && resultTypeValue=== "mg")
     result.value = Number(input.value)*1e+6;

      if(inputTypeValue === "g" && resultTypeValue=== "kg")
     result.value = Number(input.value)*0.001;
     if(inputTypeValue === "g" && resultTypeValue=== "ton")
     result.value = Number(input.value)*1e-6;
     if(inputTypeValue === "g" && resultTypeValue=== "g")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "g" && resultTypeValue=== "pound")
     result.value = Number(input.value)*0.00220462;
     if(inputTypeValue === "g" && resultTypeValue=== "mg")
     result.value = Number(input.value)*1000;

     if(inputTypeValue === "pound" && resultTypeValue=== "kg")
     result.value = Number(input.value)*0.453592;
     if(inputTypeValue === "pound" && resultTypeValue=== "ton")
     result.value = Number(input.value)*0.000453592;
     if(inputTypeValue === "pound" && resultTypeValue=== "g")
     result.value = Number(input.value)*453.592;
     if(inputTypeValue === "pound" && resultTypeValue=== "pound")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "pound" && resultTypeValue=== "mg")
     result.value = Number(input.value)*453592;

     if(inputTypeValue === "miligram" && resultTypeValue=== "kg")
     result.value = Number(input.value)*1e-6;
     if(inputTypeValue === "miligram" && resultTypeValue=== "ton")
     result.value = Number(input.value)*1e-9;
     if(inputTypeValue === "miligram" && resultTypeValue=== "g")
     result.value = Number(input.value)*0.001;
     if(inputTypeValue === "miligram" && resultTypeValue=== "pound")
     result.value = Number(input.value)*2.2046e-6;
     if(inputTypeValue === "miligram" && resultTypeValue=== "mg")
     result.value = Number(input.value)*1;
     
}
