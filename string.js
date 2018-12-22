//var string="Java script";
//console.log(string.length);

//var firstName="Biniam";
//var lastName="Welde";
//console.log(firstName.length + lastName.length);

//var string="Java script";
//console.log(string.charAt(2));
//console.log(string.charAt(4));
//console.log(string.charAt(10));
//console.log(string.charAt(11));


//var x="Java script";
//for(i=0;i<x.length;i++){
//
//    
//    console.log(x.charAt(i));
//    
//}

//var s1="Hello ";
//var s2="World ";
//var s3="XYZ";
//var s4=s1.concat(s2.concat(s3));
//console.log(s4);

//---
//var str1="";
//var str2="";
//var a="";
//function password(str1,str2){
// str1=prompt("Enter your password");
// str2=prompt("Enter your password");
//
//for(var i=0;i<str1.length;i++){
//    a=a.concat(str1.charAt(i));
//    if(i==2){
//        break;
//    }
//}return a.concat(str2.length);
//}
//var password=password(str1,str2);
//console.log(password);


//====
//var str="Hello Mike,Welcome to Amazon world.";
//var n=str.includes("Mike");
//console.log(n);
//var checkstring=function(str1,str2){
//if(str1.includes(str2)){
//    console.log(str2.length);
//}else{
//    console.log("not found");
//}
//}
//checkstring("Your order confirmation number is XYZ","confirmation");

//---
//var checkstring=function(str1,str2){
//if(str1.includes(str2)){
//    console.log(str1.indexOf(str2));
//}else{
//    console.log("not found");
//}
//}
//checkstring("Your order confirmation number is XYZ","confirmation");

//var str="Ebay is a very good website";
//var replaced=str.replace("Ebay","Bestbuy");
//console.log(replaced);

//====
//var s1="Biniam";
//var s2="Welde";
//var x=s1.charAt(0)+s1.charAt(1);
//var y=s2.charAt(s2.length-2)+s2.charAt(s2.length-1);
//replaced=s2.replace(y,x);
//console.log(replaced);


//search
//var str="In order to be a good test automation developer, i need to practice at least 2 to 3 hours a day.";
//var ele=str.search("automation");
//if(ele>=0){
//    console.log("I found it");
//}else{
//    console.log("It is not found");
//}
//var str="In order to be a good test automation developer, i need to practice at least 2 to 3 hours a day.";
//str.indexOf("automation");
//var ele=str.slice("automation");
//if(ele>=0){
//    console.log("I found it");
//}else{
//    console.log("It is not found");
//}

var str="In order to be a good test automation developer, i need to practice at least 2 to 3 hours a day.";
var x=str.slice(27,37);
if(x=="automation"){
     console.log("I found it");
}else{
    console.log("It is not found");
}