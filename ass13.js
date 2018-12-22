//Q1

//function stringTimes(string,num){
//    var str="";
//    for( var i=0;i<num;i++){
//        str+=string;
//    }
//    console.log(str);
//}
//stringTimes("Hi",2); 
//stringTimes("Hi",3); 
//stringTimes("Hi",1); 
//
////Q2
//function love6(n1,n2){
//    if(n1==6||n2==6||n1+n2==6||n1-n2==6||n2-n1==6){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}
//love6(6,4);
//love6(4,5);
//love6(1,5);
//love6(12,6);
//
////Q3
//function specialEleven(num){
//    if(num%11==0||(num-1)%11==0){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}
//    specialEleven(22);
//    specialEleven(23);
//    specialEleven(24);
//Q4
//function deerPlay(temp,isSummer){
//    if(isSummer){
//        if(temp>60&&temp<100){
//            console.log("true");
//        }else{
//            console.log("false");
//        }
//    }else{
//        if(temp>60&&temp<90){
//            console.log("true");
//        }else{
//            console.log("false");
//        }
//    }
//}
//deerPlay(70,false);
//deerPlay(95,false);
//deerPlay(95,true);

//Q4

function dateFashion(yourStyle,dateStyle){
    if(yourStyle>=0&&yourStyle<=2||dateStyle>=0&&dateStyle<=2){
        console.log(0);
    }else if(yourStyle>=8&&yourStyle<=10||dateStyle>=8&&dateStyle<=10){
        console.log(2);
    }else if(yourStyle>=3&&yourStyle<=7&&dateStyle>=3&&dateStyle<=7){
        console.log(1);
    }else if(yourStyle<0||yourStyle>10||dateStyle<0||dateStyle>10){
        console.log("Enter numbers between 0 and 10");
    }
}
dateFashion(5,10); 
dateFashion(5,2);
dateFashion(5,5); 
dateFashion(11,13);

////Q5
//
//function arrayCount9(array){
//    var counter=0;
//    for(i=0;i<array.length;i++){
//        if(array[i]==9){
//            counter++;
//        }
//    }console.log(counter);
//}
//arrayCount9([1,2,9]);
//arrayCount9([1,9,9]);
//arrayCount9([1,9,9,3,9]);
//
////Q6
//function cigarParty(cigarNumbers,weekend){
//    if(weekend==true){
//        if(cigarNumbers>60){
//            console.log("True");
//        }else{
//            console.log("False");
//        }
//    }else{
//        if(weekend==false){
//            if(cigarNumbers>=40 && cigarNumbers<=60){
//                console.log("True");
//            }else{
//                console.log("False");
//            }
//        }
//    }
//}
//cigarParty(30, false); 
//cigarParty(50, false); 
//cigarParty(70, true);
//
//
////Q7
//function doubleX(Array){
// for(var i=0;i<Array.length;i++){
//     
//        if(Array[i]=="x" && Array[i+1]=="x"){
//         console.log("true");
//         break;}
//        else if(Array[i]=="x" && Array[i+1]!="x"){
//           console.log("false");
//            break;}
//        else if(i==Array.length-1){
//             console.log("Not found");
//            break;
//        }
//       
//        }
// }
//
//doubleX(["a","x","x","b","b"]);
//doubleX(["a","x","a","x","a","x"]);
//doubleX(["x","x","x","x","x"]);
//doubleX(["a","a"]); 
//
////Q8
//function deerPlay(temp,isSummer){
//    if(isSummer){
//        if(temp>60&&temp<100){
//            console.log("true");
//        }else{
//            console.log("false");
//        }
//    }else{
//        if(temp>60&&temp<90){
//            console.log("true");
//        }else{
//            console.log("false");
//        }
//    }
//}
//deerPlay(70,false);
//deerPlay(95,false);
//deerPlay(95,true);
//
////Q9
//function caughtSpeeding(speed,birthday){
//    if(birthday==false){
//        if(speed<=60){
//            console.log("0");
//        }
//    }else if(speed>61 && speed<=80){
//        console.log("1");
//    }else if(speed>=81){
//        console.log("2");
//    }if(birthday==true){
//        if(speed<=65){
//            console.log("0")
//        }
//    }else if(speed>66 && speed<=85){
//        console.log("1");
//    }else if(speed>=86){
//        console.log("2");
//    }
//}
//caughtSpeeding(60, false); 
//caughtSpeeding(65, false); 
//caughtSpeeding(65, true) ;
//
////Q10
//function alarmClock(indexOfDay,isVacation){
//    if(isVacation==false){
//        if(indexOfDay<=5 && indexOfDay!=0 ){
//            console.log("7:00");
//        }else{
//            console.log("10:00")
//        }
//    }else{
//        if(isVacation==true){
//            if(indexOfDay<=5){
//                console.log("10:00");
//            }else{
//                console.log("off");
//            }
//        }
//    }
//}
//alarmClock(1,false); 
//alarmClock(5,false); 
//alarmClock(0,false); 
//alarmClock(2,true); 
//alarmClock(7,true); 
//
//


