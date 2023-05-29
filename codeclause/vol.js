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

    if(inputTypeValue === "cubicmeter" && resultTypeValue=== "litre")
     result.value = Number(input.value)*1000;
     if(inputTypeValue === "cubicmeter" && resultTypeValue=== "cubicmeter")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "cubicmeter" && resultTypeValue=== "USgallon")
     result.value = Number(input.value)*264.172;
     if(inputTypeValue === "cubicmeter" && resultTypeValue=== "cubicfoot")
     result.value = Number(input.value)*35.3147;
     if(inputTypeValue === "cubicmeter" && resultTypeValue=== "cubicinch")
     result.value = Number(input.value)*61023.7;
    //  if(inputTypeValue === "cubicmeter" && resultTypeValue=== "squarefoot")
    //  result.value = Number(input.value)*10.76390000047361184;


     if(inputTypeValue === "litre" && resultTypeValue=== "litre")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "litre" && resultTypeValue=== "US gallon")
     result.value = Number(input.value)*0.264172;
     if(inputTypeValue === "litre" && resultTypeValue=== "cubicfoot")
     result.value = Number(input.value)*0.0353147;
     if(inputTypeValue === "litre" && resultTypeValue=== "cubicinch")
     result.value = Number(input.value)*61.0237;
     if(inputTypeValue === "litre" && resultTypeValue=== "cubicmeter")
     result.value = Number(input.value)*0.001;

     if(inputTypeValue === "USgallon" && resultTypeValue=== "litre")
     result.value = Number(input.value)* 3.78541;
     if(inputTypeValue === "USgallon" && resultTypeValue=== "USgallon")
     result.value = Number(input.value)*1 ;
     if(inputTypeValue === "USgallon" && resultTypeValue=== "cubicfoot")
     result.value = Number(input.value)*0.133681;
     if(inputTypeValue === "USgallon" && resultTypeValue=== "cubicinch")
     result.value = Number(input.value)*231;
     if(inputTypeValue === "USgallon" && resultTypeValue=== "cubicmeter")
     result.value = Number(input.value)*0.00378541;

     if(inputTypeValue === "cubicfoot" && resultTypeValue=== "litre")
     result.value = Number(input.value)* 28.3168;
     if(inputTypeValue === "cubicfoot" && resultTypeValue=== "USgallon")
     result.value = Number(input.value)*7.48052 ;
     if(inputTypeValue === "cubicfoot" && resultTypeValue=== "cubicfoot")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "cubicfoot" && resultTypeValue=== "cubicinch")
     result.value = Number(input.value)*1728;
     if(inputTypeValue === "cubicfoot" && resultTypeValue=== "cubicmeter")
     result.value = Number(input.value)*0.0283168;

     if(inputTypeValue === "cubicinch" && resultTypeValue=== "litre")
     result.value = Number(input.value)* 0.0163871;
     if(inputTypeValue === "cubicinch" && resultTypeValue=== "USgallon")
     result.value = Number(input.value)*0.004329;
     if(inputTypeValue === "cubicinch" && resultTypeValue=== "cubicfoot")
     result.value = Number(input.value)*0.000578704;
     if(inputTypeValue === "cubicinch" && resultTypeValue=== "cubicinch")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "cubicinch" && resultTypeValue=== "cubicmeter")
     result.value = Number(input.value)*1.6387e-5;
     
}
