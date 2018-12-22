//function sayHello(){
//    console.log("hello");
//   
//}
//
//for( var i=0;i<5;i++){
//    sayHello();
//    
//}


//function sumThree(n1,n2,n3){
//  //var n1=3,n2=5,n3=7;  
//    var sumThree=n1+n2+n3;
//    console.log(sumThree);
//}
//sumThree(20,30,40);

//function convertKm(){
//    
//    miles=parseInt(prompt("Enter your miles"));
//    var km=1.6*miles;
//    console.log(km);
//    
//    
//}
//convertKm();

//function large(){
//    var n1=parseInt(prompt("Enter your first number"));
//    var n2=parseInt(prompt("Enter your second number"));
//    if(n1>n2){
//        console.log("n1 is greater");
//    }else{
//        console.log("n2 is greater");
//    }
//}large(); 
//var x=5;
//var y=10;
//function area(width,height){
//    var area = width*height;
//    console.log(area);
//    console.log(width);
//    
//    console.log(height);
//}
//area(3,5);
//area(40,50);
//area(x,y);


//function netPay(hours,rate){
//    var netPay=hours*rate;
//    console.log("Your netpay is " + "$" + netPay);
//    
//    
//}
//netPay(40,50);
//netPay(30,50);
//netPay(40,70);
//netPay(30,90);
//var n1,n2,ope;
//function result(n1,n2,ope){
//    if(ope=="+"){
//        console.log(n1+n2);
//    }else if(ope=="-"){
//        console.log(n1-n2);
//    }else if(ope=="*"){
//       console.log(n1*n2);
//    }else if(ope=="/"){
//      console.log(n1/n2);
//}}
//
//result(5,9,"+");
//result(5,9,"-");
//result(5,9,"*");
//result(5,9,"/");

//function age(birthyear){
//    var age=2018-birthyear;
//        console.log(birthyear +"="  + age);
//}
//   
//
//age(1980);
//age(1999);
//age(1989);
//
//or 
//function age(currentyear,birthyear){
//  var age=currentyear-birthyear;
//   console.log(age);
//}
//age(2018,1980);
//age(2018,1999);
//age(2018,2000);
//var n1,n2,n3;
//function greatest(n1,n2,n3){
//    if(n1>n2&&n1>n3){
//        console.log(n1+" is greatest");
//    }else if(n2>n1&&n2>n3){
//        console.log(n2 + " is greatest");
//    }else if(n3>n1&&n3>n2){
//        console.log(n3 + " is greatest");
//    }
//    
//}
//    greatest(10,20,30);
//    greatest(30,20,10);
//    greatest(20,10,30);
//
//
//function celcius(F){
//    cel=(F-32)*5/9;
//    console.log(cel);
//}
//celcius(30);
//celcius(32);
//celcius(50);
//celcius(69);

//function average(s1,s2,s3){
//    ave=(s1+s2+s3)/3;
//    if(ave>=90&&ave<=100){
//        console.log("A");
//    }else if(ave>=80&&ave<90){
//        console.log("B");
//}else if(ave>=70&&ave<=79){
//        console.log("C");
//}else if(ave>=60&&ave<=69){
//        console.log("D");
//}else if(ave>=0&&ave<=59){
//        console.log("F");
//
//}
//}
//    average(50,56,90);
//    average(80,55,90);
//    average(90,96,90);
//    average(100,86,90);


//var array=[2,5,8,"apple"];
//function findElement(array,ele){
//    for(i=0;i<array.length;i++){
//        if(array[i]==ele){
//            console.log("i found your ele");
//            break;
//        }else if(i==array.length-1){
//            array.splice(3,0,ele);
//           console.log(array);
//            break;
//        }
//    } 
//}
//findElement(array,300);
//findElement(array,2);
////findElement(array,2);
//findElement(array,"a");
//===
//function calculateArea(width,height){
//    var area=width*height;
//    return area;
//}
//var wallOne = calculateArea(3,5);
//var wallTwo = calculateArea(10,60);
//console.log(wallOne+","+wallTwo);
//or
//function calculateArea(width,height){
//    var area=width*height;
//    return area;
//}
//function isChecked(){
//    if(calculateArea(5,8)>15){
//        console.log("valid");
//    }else{
//        console.log("not valid");
//    }
//}
//    isChecked();

//function calculateResult(n1,n2){
//var result=n1+n2;
//return result;
//}
//var sum=calculateResult(10,20);
//console.log(sum);

//function calculateAge(yearBirth){
//var age=2018-yearBirth;
//return age;
//}
//function retirement(name,year){
//    
//var retires=65-calculateAge(year);
//console.log(name + " retires in " + retires +" years");
//}
//retirement("Bini",1990);

//function addTen(a){
//    return a+10;
//}
//function addTen(a,b){
//    return a+b+10;
//}
//var result = addTen(100);
//console.log(result);

//function addTen(a,b){
//    return a+b+10;
//}
//function addTen(a){
//    return a+10;
//}
//var result = addTen(100);
//console.log(result);
//
//var area=function(width,height){
//return  width*height;
//}
//var result=area(10,20);
//console.log(result);

