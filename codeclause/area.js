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

    if(inputTypeValue === "squaremeter" && resultTypeValue=== "squarekilometer")
     result.value = Number(input.value)*1e-6;
     if(inputTypeValue === "squaremeter" && resultTypeValue=== "squaremeter")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "squaremeter" && resultTypeValue=== "squaremile")
     result.value = Number(input.value)*3.861e-7;
     if(inputTypeValue === "squaremeter" && resultTypeValue=== "squareyard")
     result.value = Number(input.value)*1.19599;
     if(inputTypeValue === "squaremeter" && resultTypeValue=== "squarefoot")
     result.value = Number(input.value)*10.7639;
     if(inputTypeValue === "squaremeter" && resultTypeValue=== "squareinch")
     result.value = Number(input.value)*1550.0016000682;
     if(inputTypeValue === "squaremeter" && resultTypeValue=== "squarefoot")
     result.value = Number(input.value)*10.76390000047361184;


     if(inputTypeValue === "squarekilometer" && resultTypeValue=== "squarekilometer")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "squarekilometer" && resultTypeValue=== "squaremile")
     result.value = Number(input.value)*0.386102;
     if(inputTypeValue === "squarekilometer" && resultTypeValue=== "squareyard")
     result.value = Number(input.value)*1.196e+6;
     if(inputTypeValue === "squarekilometer" && resultTypeValue=== "squarefoot")
     result.value = Number(input.value)*10764000.004736;
     if(inputTypeValue === "squarekilometer" && resultTypeValue=== "squareinch")
     result.value = Number(input.value)*1.55e+9;
     if(inputTypeValue === "squarekilometer" && resultTypeValue=== "squaremeter")
     result.value = Number(input.value)*1e+6;

     if(inputTypeValue === "squaremile" && resultTypeValue=== "squarekilometer")
     result.value = Number(input.value)* 2.58999;
     if(inputTypeValue === "squaremile" && resultTypeValue=== "squaremile")
     result.value = Number(input.value)*1 ;
     if(inputTypeValue === "squaremile" && resultTypeValue=== "squareyard")
     result.value = Number(input.value)*3.098e+6;
     if(inputTypeValue === "squaremile" && resultTypeValue=== "squarefoot")
     result.value = Number(input.value)*2.788e+7;
     if(inputTypeValue === "squaremile" && resultTypeValue=== "squareinch")
     result.value = Number(input.value)*4.014e+9;
     if(inputTypeValue === "squaremile" && resultTypeValue=== "squaremeter")
     result.value = Number(input.value)*2.59e+6;

     if(inputTypeValue === "squareyard" && resultTypeValue=== "squarekilometer")
     result.value = Number(input.value)* 8.3613e-7;
     if(inputTypeValue === "squareyard" && resultTypeValue=== "squaremile")
     result.value = Number(input.value)*3.2283e-7;
     if(inputTypeValue === "squareyard" && resultTypeValue=== "squareyard")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "squareyard" && resultTypeValue=== "squarefoot")
     result.value = Number(input.value)*9;
     if(inputTypeValue === "squareyard" && resultTypeValue=== "squareinch")
     result.value = Number(input.value)*1296;
     if(inputTypeValue === "squareyard" && resultTypeValue=== "squaremeter")
     result.value = Number(input.value)*0.836127;

     if(inputTypeValue === "squarefoot" && resultTypeValue=== "squarekilometer")
     result.value = Number(input.value)* 9.2903e-8;
     if(inputTypeValue === "squarefoot" && resultTypeValue=== "squaremile")
     result.value = Number(input.value)*3.587e-8;
     if(inputTypeValue === "squarefoot" && resultTypeValue=== "squareyard")
     result.value = Number(input.value)*0.111111;
     if(inputTypeValue === "squarefoot" && resultTypeValue=== "squarefoot")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "squarefoot" && resultTypeValue=== "squareinch")
     result.value = Number(input.value)*144;
     if(inputTypeValue === "squarefoot" && resultTypeValue=== "squaremeter")
     result.value = Number(input.value)*0.092903;

     if(inputTypeValue === "squareinch" && resultTypeValue=== "squarekilometer")
     result.value = Number(input.value)* 6.4516e-10;
     if(inputTypeValue === "squareinch" && resultTypeValue=== "squaremile")
     result.value = Number(input.value)*2.491e-10 ;
     if(inputTypeValue === "squareinch" && resultTypeValue=== "squareyard")
     result.value = Number(input.value)*0.000771605;
     if(inputTypeValue === "squareinch" && resultTypeValue=== "squarefoot")
     result.value = Number(input.value)*0.00694444;
     if(inputTypeValue === "squareinch" && resultTypeValue=== "squareinch")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "squareinch" && resultTypeValue=== "squaremeter")
     result.value = Number(input.value)*0.00064516;

    
     
}
