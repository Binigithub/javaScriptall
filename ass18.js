////ass18
//
////Q1
//
//function helloName(string){
//console.log("Hello " + string +"!");
//}
//helloName("Bob");
//helloName("Alice");
//helloName("X");
//
////Q2
//function makeAbba(str1,str2){
//    console.log(str1.concat(str2).concat(str2).concat(str1));
////or
//    console.log(str1 + str2 + str2 + str1);
//}
//makeAbba("Hi","Bye");
//makeAbba("Yo","Alice");
//makeAbba("What","Up");
//  or
//function makeAbba(str1,str2){
//   var result= (str1.concat(str2).concat(str2).concat(str1));
//return result;
//}
//console.log(makeAbba("Hi","Bye");
//console.log(makeAbba("Hi","Bye");
//console.log(makeAbba("Hi","Bye");
//
//
////Q3
//
//function extraEnd(str){
//    for(i=0;i<str.length;i++){
//        var x=str.slice(str.length-2,str.length);
//        var result=x.concat(x).concat(x);
//        return result;
//    }
//}
//console.log(extraEnd("Hello"));
//console.log(extraEnd("ab"));
//console.log(extraEnd("Hi"));
//
////Q4
//
//function firstTwo(str){
//    
//        console.log(str.substr(0,2));
//}
//firstTwo("Hello");
//firstTwo("abcdefg");
//firstTwo("ab");
//firstTwo(" ");
//firstTwo("a");
//
////Q5
//
//function firstHalf(str){
//    console.log(str.substr(0,(str.length)/2));
//}
//firstHalf("WooHoo");
//firstHalf("HelloThere");
//firstHalf("abcdef");
//
////Q6
//
//function withOutEnd(str){
//    console.log(str.substr(1,str.length-2));
//}
//withOutEnd("Hello");
//withOutEnd("java");
//withOutEnd("coding");
//
////Q7
//
//function comboString(str1,str2){
//    if(str1.length>str2.length){
//        console.log(str2.concat(str1).concat(str2));
//    }else{
//        console.log(str1.concat(str2).concat(str1));
//    }
//    
//}
//comboString("Hello","hi");
//    comboString("hi","Hello");
//    comboString("aaa","b");
//
////Q8
//
//function nonStart(str1,str2){
//    console.log(str1.substr(1,str1.length).concat(str2.substr(1,str2.length)));
//}
//nonStart("Hello","There");
//nonStart("Java","Code");
//nonStart("Shotl","Java");
//
////Q9
//
//function leftTwo(str){
//    console.log(str.substr(2,str.length).concat(str.substr(0,2)));
//}
//
//leftTwo("Hello");
//leftTwo("Java");
//leftTwo("Hi");
//
////Q10
//
//function rightTwo(str){
//    console.log(str.substr(str.length-2,2).concat(str.substr(0,str.length-2)));
//}
//rightTwo("Hello");
//rightTwo("Java");
//rightTwo("Hi");


