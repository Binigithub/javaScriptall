// variable declaration
//ES5
//var name5="Mike Smith";
//var age=23;
//name5="Mike Miller";
//console.log(name5);

//ES6
//const name6="Mike Smith";
//let age6=23;
//name6 = "Mike Miller";
//console.log(name6);
//console.log(age6);

//1
//const: if value not changing
//let: if value is changing

//2
//variables declare with var in ES5 is function scoped, and the variables declared with let and const in ES6 are block-scoped.

//function driLic(passTest){
//    if(passTest){
//        var firstName="MIke";
//        var yearBirth=1970;
//        console.log(firstName+", born in"+yearBirth)
//    }
//    
//}
//driLic(true);


//function driLic(passTest){
//    if(passTest){
//        let firstName2="MIke";
//        const yearBirth2=1970;
//        console.log(firstName2+", born in "+yearBirth2+" Allowed to drive");
//}
//    }
//    
//driLic(true);

//function driLic(passTest){
//    let firstName2;
//    const yearBirth2=1970;
//    if(passTest){
//        firstName2="MIke";
//        
//        
//}
//    console.log(firstName2+", born in "+yearBirth2+" Allowed to drive");
//    }
//driLic(true);

//var i=23;
//for(var i=0;i<5;i++){
//    console.log(i);
//}
//console.log(i);//0 1 2 3 4 5

//let i=23;
//let sum=0;
//for(let i=0;i<5;i++){
//    
//    console.log(i);
//    sum+=+i;
//   
//}
//
// console.log(sum);
//console.log(i);

//String

//let a=10;
//let b=20;
//console.log("JavaScript first appeared "+ " " +(a+b)+ " years ago.");
//
////Templet String
//
//console.log(`JavaScript first appeared ${a+b} years ago.`);

//let fN="Mike";
//let lN="Smith";
//const yOB=1970;
//function calAge(year){
//    return 2018-year;
//}
//console.log(`This is ${fN} ${lN}. He was born in ${yOB}. Today, he is ${calAge(yOB)} years old.`);

//String Methods

//let fN="Mike";
//let lN="Smith ";
//
//const n=`${fN} ${lN}`;
//console.log(n.startsWith("m"));
//console.log(n.endsWith("Sm"));
//console.log(n.endsWith("th"));
//console.log(n.includes(""));
//console.log(n.includes("ik"));
//console.log(`${fN} `.repeat("5"));

///////////////

//Arow Functions

//ES5
//var x=function(a){
//    return a;
//}

//ES6

//let x= a=>a;
//console.log(x(2));

//If we do not have any parameters 

//ES5

//var y=function(){
//    console.log("Hello");
//    
//}

//ES6

//let y=()=>{
//    console.log("Hello")
//};
//y();

//If we have multiple parameters

//ES5

//var z=function(a,b,c){
//    return a+b+c;
//}
//console.log(z(1,2,3));
//
////ES6
//
//let k=(a,b,c)=>a+b+c;
//console.log(k(1,2,3));

///////////////

//let array1=[1,4,9,16];
//const map1=array1.map(i=>i*2);
//console.log(map1);


//const years=[1990,1965,1982,1957];
//let ages6=years.map(el=>2018-el);
//console.log(ages6);

//var materials = [
//
//    "Hydrogen",
//
//    "Helium", 
//
//    "Lithium",
//
//    "Beryllium"
//
//]
//
//let outcome = materials.map(x=>x.length);
//
//console.log(outcome)

//Destructing
//Destructing is a js expression that makes it possible to unpack values from array, or properties from objects, into distinct variables

//ES5
//var John=["John,26"];
//var name=John[0];
//var age=John[1];

//ES6

//let [name,age]=["John",26];
//console.log(name);
//console.log(age);

//const obj={
//    fN:"MIke",
//    lN:"Smith"
//}
//
//const {fN,lN}=obj;
//console.log(fN);


//function calAgeReti(year){
//    const age=new Date().getFullYear()-year;
//    return[age,65-age];
//}
//
//const [age2,reti]=calAgeReti(1990);
//console.log(age2);
//console.log(reti);


//Arrays

//var x = Array.from("JavaScript");
//console.log(x);

//ES5
//var ages=[12,17,8,21,14,11];
//var full=ages.map(function(cur){
//    return cur>=18;
//})
//
//console.log(full);
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);

//ES6

//findIndex()=returns the index of the firsst element in the array that satisfaies the provided texting function.
//
//find()=returns the value of the firsst element in the array that satisfaies the provided texting function.

//var ages=[12,17,8,21,14,11];
//console.log(ages.findIndex(cur=>cur>=18));
//console.log(ages.find(cur=>cur>=18));

//for..of

//let myArray=[10,20,30];
//for(let x of myArray){
//    x+=1;
//    console.log(x);
//}
//

//let myObj={
//    x:1,
//    y:2,
//    z:3
//}
//for(let a in myObj){
//    console.log(a);
//    console.log(myObj[a]);
//}
//
//let list=[4,5,6];
//for(let i in list){
//    console.log(i);     //index of the array
//}
//for(let i of list){
//    console.log(i);
//    
//}


//Spread Operator

//let mid=[3,4];
//let arr=[1,2,mid,5,6];
//console.log(arr);
//
//let arr2=[1,2,...mid,5,6];
//console.log(arr2);

//ES5
//function addFourAges(a,b,c,d){
//    return a+b+c+d;
//}
//let sum1=addFourAges(10,20,30,40);
//console.log(sum1);


//if ages in an array
//function addFourAges(a,b,c,d){
//    return a+b+c+d;
//}
//let ages=[10,20,30,40];
//let sum=addFourAges(...ages);
//console.log(sum);

//Rest Operator

//function sumAll(...args){
//    let sum=0;
//    for(let arg of args){
//        sum+=arg;
//    }
//    return sum;
//}
//console.log(sumAll(1));
//console.log(sumAll(1,2));
//console.log(sumAll(1,2,3));

    
//task
//function mul(multi,...theArgs){
//    return theArgs.map(function(element){
//        return multi*element;
//    });
//                      
//}
//var arr=mul(2,1,2,3);
//console.log(arr);

//let mul=(multi,...theArr)=>theArr.map(ele=>multi*ele);
//let arr=mul(2,1,2,3);
//console.log(arr);

//Map

//the map object holds key-value pairs.

//let myMap=new Map();
//myMap.set("keyString","Value associated with a string.");
//myMap.set("keyObj","Value associated with keyObj.");
//myMap.set("keyFunc","Value associated with keyFunc.");
//
//console.log(myMap.size);
//
//console.log(myMap.get("keyString"));
//console.log(myMap.get("keyObj"));
//console.log(myMap.get("keyFunc"));


//let que=new Map();
//que.set("que","What is your girl friends name?");
//que.set(1,"ES5");
//que.set(2,"ES6");
//que.set(3,"ES2015");
//que.set("correct",3);
//que.set(true,"correct answer is D");
//que.set(false,"Wrong try");
//
//console.log(que.get("que"));
//console.log(que.size);
//
//
//for(let [key,value] of que.entries()){
//    console.log(`This is ${key}, and it is set to ${value}`);
//}




