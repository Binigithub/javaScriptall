////21
////Q1
//
//function sameStarChar(str){
//    
//    for(i=1;i<str.length;i++){
//        
//        if(str.charAt(i)=="*"){
//            if(str.charAt(i-1)==str.charAt(i+1)){
//           console.log(true);
//           break;
//        }else {
//            console.log(false);
//           
//        }
//        }
//    }
//}
//
//sameStarChar("xy*yzz");
//sameStarChar("xy*zzz");
//sameStarChar("*xa*az");
//
////Q2
//
//function countTriple(str){
//    var counter=0;
//    for( i=0;i<str.length;i++){
//        if(str.charAt(i)==str.charAt(i+1)&&str.charAt(i)==str.charAt(i+2)){
//            counter++;
//        }else{
//            counter;
//        }
//    }
//    console.log(counter);
//}
//countTriple("abcXXXabc");
//countTriple("xxxabyyyybc");
//countTriple("a");
//
////Q3
//
//function gHappy(str){
//    
//    for(var i=0;i<str.length;i++){
//        if(str.substring(i,i+1)=="g"){
//            var boolean=false;
//            
//            if(str.substring(i+1,i+2)=="g"||str.substring(i-1,i)=="g"){
//                boolean=true;
//            }
//            }
//        }
//    if(boolean){
//        console.log(true);
//    }else{
//        console.log(false);
//    }
//    }
//
//gHappy("xxggxx");
//gHappy("xxgxx");
//gHappy("xxggyygxx");
//
////Or
//
////function gHappy(str){
////var result=false;
////    for(var i=0;i<str.length;i++){
////        if(str[i]=="g" && str[i-1]=="g"||str[i+1]=="g"){
////            result=true;
////        }else if(str[i]=="g" && str[i-1]!="g"&&str[i+1]!="g"){
////            result=false;
////        }
////    }console.log(result);
////}
////
////gHappy("xxggxx");
////gHappy("xxgxx");
////gHappy("xxggyygxx");
////
//
//
////Q4
//
//function equalsNot(str){
//    counter1=0;
//    counter2=0;
//    for(i=0;i<str.length;i++){
//        if(str.substr(i,1)=="i"&&str.substr(i+1,1)=="s"){
//            counter1++;
//        }else if(str.substr((i,1)=="n")&&(str.substr(i+1,1)=="o")&&(str.substr(i+2,1)=="t")){
//            counter2++;
//        }
//    }
//    if(counter1==counter2){
//        console.log(true);
//    }else{
//        console.log(false);
//    }
//}
//equalsNot("This is not");
//equalsNot("This is notnot");
//equalsNot("noisxxnotyynotxisi");
//
////Q5
//
//function getSandwich (str){
//var count=0
//for (i=0; i<str.length; i++){
//    if(str.substr(i,5)=="bread"){
//        count++
//    } 
//}
//if (count>=2){
//    
//    var z=str.split("bread")
//    console.log(z[1]);
//} else{
//    console.log ("");
//}
//}
//getSandwich("breadjambread");
//getSandwich("xxbreadjambreadyy");
//getSandwich("xxbreadyy");
//
////Q6
// 
//function endOther(str,str1){
//    
//    if(str.length>str1.length){
//        if(str1.toUpperCase()===(str.substring(str.length-str1.length,str.length)).toUpperCase()){
//           console.log(true);
//           }
//    }else if(str.length<str1.length){
//        if(str.toUpperCase()===(str1.substring(str1.length-str.length,str1.length)).toUpperCase()){
//           console.log(true);
//    }
//    
//    
//}else if(str.toUpperCase()!=(str1.substring(str1.length-str.length,str1.length)).toUpperCase()){
//        console.log(false);
//   }
//}
//
//endOther("Hiabc", "abc");
//endOther("ABC", "HiaBc");
//endOther("abc", "abXabc");
//function endOther(str,str1){
// 
//or

function endOther(str,str1){
   var areEqual = str.toUpperCase()==str1.toUpperCase(); 
    if(str.length>str1.length){
        
        if(str.endsWith(str1)){
           console.log(true);
           }
    }else if(str.length<str1.length){
        
        if(str1.endsWith(str)){
           console.log(true);
        }
    
    
    }else {
        console.log(false);
    }
}

endOther("Hiabc", "abc");
endOther("AbC", "HiaBc");
endOther("abc", "abXabc");
//



//
////Q7
//
//function seeColor(str){
//    if(str.substr(0,3)=="red"){
//        console.log("red");
//    }else if(str.substr(0,4)=="blue"){
//        console.log("blue");
//    }else{
//        console.log("");
//    }
//}
//seeColor("redxx");
//
//seeColor("xxred");
//
//seeColor("blueTimes");