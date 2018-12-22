////19
////Q1
//
//function frontAgain(str){
//    
//        if(str.substr(0,2)==str.substr(str.length-2,2)){
//            console.log(true);
//        }else{
//            console.log(false);
//        }
//    
//}
//frontAgain("edited");
//frontAgain("edit");
//frontAgain("ed");
//
////Q2
//
//function countHi(str){
//    var counter=0;
//
//    for(i=0;i<str.length;i++){
//        if(str.substr(i,2)=="hi"){
//        counter++;
//        }
//    } 
//   console.log(counter); 
//} 
//countHi("abc hi ho");
//countHi("ABChi hi");
//countHi("hihi");
//
////Q3
//
//function catDog(str){
//    var counter1=0;
//    var counter2=0;
//    for(var i=0;i<str.length;i++){
//        if(str.charAt(i)=="c"&&str.charAt(i+1)=="a"&&str.charAt(i+2)=="t"){
//            counter1++;
//        }else if(str.charAt(i)=="d"&&str.charAt(i+1)=="o"&&str.charAt(i+2)=="g"){
//            counter2++;
//        }
//    }
//    if(counter1==counter2){
//        console.log(true);
//    }else{
//        console.log(false);
//    }
//}
//
//catDog("catdog");
//catDog("catcat");
//catDog("1cat1cadodog");
//
//
////Q4
//
//function doubleChar(str1){
//    var str="";
//    for(i=0;i<str1.length;i++){
//    var str=str + str1.charAt(i).concat(str1.charAt(i));
//      
//    }
//     console.log(str);  
//}
//doubleChar("the")
//doubleChar("AAbb")
//doubleChar("Hi-There")
//
////Q5
//
//function endsLy(str){
//    
//    
//        if(str.substr(str.length-2,2)=="ly"){
//            console.log(true);
//        }else{
//        console.log(false);
//        }
//   
//    
//}
//endsLy("oddly");
//endsLy("y");
//endsLy("oddy");
//
////Q6
//
//function withOutEnde2(str){
//    var str1=str.substring(1,str.length-1);
//    console.log(str1);
//}
//withOutEnde2("hello");
//withOutEnde2("abc");
//withOutEnde2("ab");
//
////Q7
//
//function hasBad(str){
//    if(str.substr(0,3)=="bad"||str.substr(1,3)=="bad"){
//        console.log(true);
//    }else{
//        console.log(false);
//    }
//}
//hasBad("badxx");
//hasBad("xbadxx");
//hasBad("xxbadxx");

//Q8
function atFirst(str){
    if(str.length==1){
        console.log(str.concat("@"));
    }else if(str.length<1){
        console.log(str.concat("@@"));
    }else{
       console.log(str.substr(0,2));             
                    }
}


atFirst("hello");
atFirst("hi");
atFirst("h");
atFirst("");







