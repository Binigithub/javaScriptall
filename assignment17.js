//Ass17

var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees.";

// 1) Display how many sentences in the string.
console.log(strVar.split(".").length-1);

//2) Display how many words in the string.

console.log(strVar.split(" ").length);

//3) Display todays date.

console.log(strVar.substr(114,10));

//4) Pick today's weather from the string and convert to Celsius and display the result.

var celsius=(strVar.substr(137,2)-32)*5/9;
console.log(celsius+" celsius");

//5) Separate Numbers and non numerical characters to 2 separate variables and display the result.
//
//         Please use isNaN() = is not a number method to check if it is a number or not.
//         console.log(isNaN(1));  -- >false
//         console.log(isNaN("apple")); -- >true
//
//        Output Should Be:
//            InordertoBecomeaNumberTestAutomationDeveloper,ineedtopracticeatleasttohoursaday.Todayis//.WeatherisFdegrees.
//           1230811201870

var str=strVar.split(" ");
str1="";
num="";
for(i=0;i<strVar.length;i++){
    
    if(isNaN(strVar.charAt(i))){
        str1=str1+ strVar.charAt(i);
        
    }
    else {
        num=num+strVar.charAt(i);
        
    }
}
console.log(str1);
console.log(num.replace(/\s/g,""));

//6) in the String instead of '2 to 3 hours' , display '3 to 4 hours'.

var replaced =strVar.replace("2 to 3 hours","3 to 4 hours");
console.log(replaced);

//7) Display first sentence in Uppercase and other sentences in Lowercase.

var x=strVar.substring(0,104).toUpperCase();
var y=strVar.substring(104,strVar.length).toLowerCase();
console.log(x.concat(y));

//8) Remove all spaces from the string and display the result.
console.log(strVar.replace(/\s/g,""));

//var str2=strVar.split(".").join("");

//9) Reverse all words order in the string and replace all "." and "," with ""
//
//      Output Should Be:
//      degrees F 70 is Weather 08/11/2018 is Today day a hours 3 to 2 least at practice to need i Developer Automation Test 1 Number a Become to order In 

var array=[];
for(i=0;i<strVar.length;i++){
    var str=strVar.split(" ");
    
   }
for(j=str.length-1;j>=0;j--){
    array.push(str[j]);
}
var str2=array.toString();
var str3=str2.replace(/,/g," ");

console.log(str3.split(".").join("")); 
 





