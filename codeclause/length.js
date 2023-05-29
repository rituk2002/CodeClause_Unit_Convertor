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

    if(inputTypeValue === "meter" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)*0.001;
     if(inputTypeValue === "meter" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*100;
     if(inputTypeValue === "meter" && resultTypeValue=== "milimeter")
     result.value = Number(input.value)*1000;
     if(inputTypeValue === "meter" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*1000000;
     if(inputTypeValue === "meter" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*1000000000;
     if(inputTypeValue === "meter" && resultTypeValue=== "mile")
     result.value = Number(input.value)*0.0006213712;
     if(inputTypeValue === "meter" && resultTypeValue=== "yard")
     result.value = Number(input.value)*1.0936;
     if(inputTypeValue === "meter" && resultTypeValue=== "foot")
     result.value = Number(input.value)*3.28084;
     if(inputTypeValue === "meter" && resultTypeValue=== "inch")
     result.value = Number(input.value)*39.3701;
     if(inputTypeValue === "meter" && resultTypeValue=== "meter")
     result.value = Number(input.value)*1;

     if(inputTypeValue === "kilometer" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*100000;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "milimeter")
     result.value = Number(input.value)*1000000;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*1000000000;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*1000000000000;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "mile")
     result.value = Number(input.value)*0.6213715277778;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "yard")
     result.value = Number(input.value)*1093.6138888889281588;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "foot")
     result.value = Number(input.value)*3280.8416666667849313;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "inch")
     result.value = Number(input.value)*39370.100000001431908;
     if(inputTypeValue === "kilometer" && resultTypeValue=== "meter")
     result.value = Number(input.value)*1000;

     if(inputTypeValue === "centimeter" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)* 0.000001;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "milimeter")
     result.value = Number(input.value)*10;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*10000;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*10000000;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "mile")
     result.value = Number(input.value)*0.00000621371 ;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "yard")
     result.value = Number(input.value)*0.0109361;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "foot")
     result.value = Number(input.value)*0.0328083;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "inch")
     result.value = Number(input.value)*0.393701;
     if(inputTypeValue === "centimeter" && resultTypeValue=== "meter")
     result.value = Number(input.value)*0.01;

     if(inputTypeValue === "milimeter" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)* 0.0000001;
     if(inputTypeValue === "milimeter" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*0.1;
     if(inputTypeValue === "milimeter" && resultTypeValue=== "milimeter")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "milimeter" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*1000;
     if(inputTypeValue === "milimeter" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*1000000;
     if(inputTypeValue === "milimeter" && resultTypeValue=== "mile")
     result.value = Number(input.value)*0.000000621371 ;
     if(inputTypeValue === "milimeter" && resultTypeValue=== "yard")
     result.value = Number(input.value)*0.00109361;
     if(inputTypeValue === "miliometer" && resultTypeValue=== "foot")
     result.value = Number(input.value)*0.00328083;
     if(inputTypeValue === "milimeter" && resultTypeValue=== "inch")
     result.value = Number(input.value)*0.0393701;
     if(inputTypeValue === "milimeter" && resultTypeValue=== "meter")
     result.value = Number(input.value)*0.001;

     if(inputTypeValue === "macrometer" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)* 1e-9;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*0.0001;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "milimeter")
     result.value = Number(input.value)*0.001;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*1000;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "mile")
     result.value = Number(input.value)*6.214e-10 ;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "yard")
     result.value = Number(input.value)*0.0000010936133;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "foot")
     result.value = Number(input.value)*0.0000032808399;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "inch")
     result.value = Number(input.value)*0.0000393700787;
     if(inputTypeValue === "macrometer" && resultTypeValue=== "meter")
     result.value = Number(input.value)*0.000001;

     if(inputTypeValue === "nanometer" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)* 1e-12;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*1e-7;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "milimeter")
     result.value = Number(input.value)*0.000001;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*0.001;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "mile")
     result.value = Number(input.value)*6.214e-13 ;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "yard")
     result.value = Number(input.value)*1.0936133e-9;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "foot")
     result.value = Number(input.value)*3.2808399e-9;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "inch")
     result.value = Number(input.value)*3.93700787e-8;
     if(inputTypeValue === "nanometer" && resultTypeValue=== "meter")
     result.value = Number(input.value)*1e-9;

     if(inputTypeValue === "mile" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)* 1.609269391696169939;
     if(inputTypeValue === "mile" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*160926.9391696169939;
     if(inputTypeValue === "mile" && resultTypeValue=== "milimeter")
     result.value = Number(input.value)*1609269.391696169939;
     if(inputTypeValue === "mile" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*1609269391.696169939;
     if(inputTypeValue === "mile" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*1609269391696.169939;
     if(inputTypeValue === "mile" && resultTypeValue=== "mile")
     result.value = Number(input.value)*1 ;
     if(inputTypeValue === "mile" && resultTypeValue=== "yard")
     result.value = Number(input.value)*1759.9185100419;
     if(inputTypeValue === "mile" && resultTypeValue=== "foot")
     result.value = Number(input.value)*5279.755230125523013;
     if(inputTypeValue === "mile" && resultTypeValue=== "inch")
     result.value = Number(input.value)*63357.062600579337;
     if(inputTypeValue === "mile" && resultTypeValue=== "meter")
     result.value = Number(input.value)*1609.26939196167;
     
     if(inputTypeValue === "yard" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)* 0.000914399998610112;
     if(inputTypeValue === "yard" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*91.4399998610112;
     if(inputTypeValue === "yard" && resultTypeValue=== "milimeter")
     result.value = Number(input.value)*914.399998610112;
     if(inputTypeValue === "yard" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*91439.9998610112;
     if(inputTypeValue === "yard" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*91439999.8610112;
     if(inputTypeValue === "yard" && resultTypeValue=== "mile")
     result.value = Number(input.value)*0.00056820816 ;
     if(inputTypeValue === "yard" && resultTypeValue=== "yard")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "yard" && resultTypeValue=== "foot")
     result.value = Number(input.value)*2.999999999999999;
     if(inputTypeValue === "yard" && resultTypeValue=== "inch")
     result.value = Number(input.value)*35.999999990856;
     if(inputTypeValue === "yard" && resultTypeValue=== "meter")
     result.value = Number(input.value)*0.91439998610112;

     if(inputTypeValue === "foot" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)* 0.00030479999;
     if(inputTypeValue === "foot" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*30.47999995367;
     if(inputTypeValue === "foot" && resultTypeValue=== "miliometer")
     result.value = Number(input.value)*304.7999995367;
     if(inputTypeValue === "foot" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*3047999.995367;
     if(inputTypeValue === "foot" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*3047999995.36704;
     if(inputTypeValue === "foot" && resultTypeValue=== "mile")
     result.value = Number(input.value)*0.000189403719719 ;
     if(inputTypeValue === "foot" && resultTypeValue=== "yard")
     result.value = Number(input.value)*0.33333333333333;
     if(inputTypeValue === "foot" && resultTypeValue=== "foot")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "foot" && resultTypeValue=== "inch")
     result.value = Number(input.value)*11.999999996952;
     if(inputTypeValue === "foot" && resultTypeValue=== "meter")
     result.value = Number(input.value)*0.304799999536704;

     if(inputTypeValue === "inch" && resultTypeValue=== "kilometer")
     result.value = Number(input.value)* 0.000025;
     if(inputTypeValue === "inch" && resultTypeValue=== "centimeter")
     result.value = Number(input.value)*2.500000025908;
     if(inputTypeValue === "inch" && resultTypeValue=== "miliometer")
     result.value = Number(input.value)*25.00000025908;
     if(inputTypeValue === "inch" && resultTypeValue=== "macrometer")
     result.value = Number(input.value)*25000.00025908;
     if(inputTypeValue === "inch" && resultTypeValue=== "nanometer")
     result.value = Number(input.value)*25000000.25908;
     if(inputTypeValue === "inch" && resultTypeValue=== "mile")
     result.value = Number(input.value)*0.00028410408028 ;
     if(inputTypeValue === "inch" && resultTypeValue=== "yard")
     result.value = Number(input.value)*0.0277778;
     if(inputTypeValue === "inch" && resultTypeValue=== "foot")
     result.value = Number(input.value)*0.0833333;
     if(inputTypeValue === "inch" && resultTypeValue=== "inch")
     result.value = Number(input.value)*1;
     if(inputTypeValue === "inch" && resultTypeValue=== "meter")
     result.value = Number(input.value)*0.0254;
     
}

