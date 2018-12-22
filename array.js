//creating arrays

//var scores = new Array();
//var scores = Array(10);
//var scores = new Array(9,10,5,8);
//var scores = ["red","green",1,"false"];
//var scores = [];

//var names = ["Mike","Smith","John","Tedd"];
////console.log(names[0]);
////console.log(names[1]);
////console.log(names[2]);
////console.log(names[3]);
// //or
//console.log(names[0] + "," + names[1]);
//console.log(names);
 

//months
//var myArray = Array(11);
//myArray[0]="Jan";
//myArray[1]="Feb";
//myArray[2]="Mar";
//myArray[3]="Apr";
//myArray[4]="Mar";
//myArray[5]="Jun";
//myArray[6]="Jul";
//myArray[7]="Aug";
//myArray[8]="Sep";
//myArray[9]="Oct";
//myArray[10]="Nov";
//myArray[11]="Dec";   
//var index=prompt("Enter your month index");
//console.log("The month is " + myArray[index]);


//var myArray = Array(6);
//myArray[0]="Mon";
//myArray[1]="Tue";
//myArray[2]="Wed";
//myArray[3]="Thu";
//myArray[4]="Fri";
//myArray[5]="Sat";
//myArray[6]="Sun";
//var index=prompt("Enter your day index");
//console.log("The day is " + myArray[index]);

//or
//var days=["Mon","Tue","Wed","Thu","Fri","Sat","Fri","Sat","Sun"];
//
//
//var i=prompt("Enter your index");
//console.log("The day is " + days[i]);
//
//console.log(days.length);

//var shopList=["Cheese","Pumkin","Bread","Eggs","Milk","Almonds"];
//for(var i=0;i<shopList.length;i++){
//    console.log("The item is " + shopList[i]);
//}
////var myCar="Honda";
//var car=["Nissan","Toyota","Merceds","Infinity","Lambarghini","Honda"];
////for(i=0;i<car.length;i++){
////    if(car[i]=="Honda"){
////        console.log("I found your car Honda");
////        break;
////    }else if(i==car.length-1){ 
////       console.log("I could't find your car");
//// 
////        
////        }
////    }
//
////or
//var bool=false;
//for(var i=0;i<car.length;i++){
//    if(car[i]=="Honda"){
//        bool=true;
//    }
//    }
//    if(bool==true){
//        console.log("Found it");
//    
//    }else{
//        console.log=("not found it");
//    }



//===
//var car=["Nissan","Toyota","Merceds","Infinity","Lambarghini","Honda"];
//console.log(Array.isArray(car));
//console.log(car.toString());

//var shopList=["Cheese","Pumkin","Eggs","Milk","Almonds"];
//if(Array.isArray(shopList));{
//console.log(Array.isArray(shopList));
//}else{
//    console.log("Not array");
//}

//var stack=[];
//stack.push(1);
//stack.push(2);
//stack.push(3);
//stack.pop();
//
//console.log(stack);
//
//for(var i=0;i<stack.length;i++){
//console.log(stack[i]);
//}

//var myFish=["angel","clown","mandarin","surgean"];
//myFish.shift();
//for(var i=0;i<myFish.length;i++){
//   console.log(myFish[i]); 
//}

//var names=["Andrew","Edward","Paul","Chris","John"];
//while(i=names.shift()!==undefined){
//    console.log(i);
//}
//console.log(names);

//or
//var names=["Andrew","Edward","Paul","Chris","John"];
//while(names.length!=0){
//    names.shift();
//}console.log(names);

//splice

//var myFish=["angel","clown","mandarin","sturgean"];
//myFish.splice(2,0,"drum");
//console.log(myFish);
//myFish.splice(3,1);
//console.log(myFish);
//myFish.splice(2,1,"trumpet");
//console.log(myFish);
//
//myFish.splice(0,2,"parrot","anemone","blue");
//console.log(myFish);
//myFish.splice(2,2);
//console.log(myFish);
//myFish.splice(1,1);
//console.log(myFish);
//
//
//
//slice
//var animals=["dog","cat","monkey","donkey","dino","elephant"]
//console.log(animals.slice(0));
//console.log(animals.slice(1));
//console.log(animals.slice(5));
//console.log(animals.slice(4));
//console.log(animals.slice(0,1));
//console.log(animals.slice(0,2));
//console.log(animals.slice(0,0));
//console.log(animals.slice(2,3));
//console.log(animals.slice(2,5));


//var scores=[10,20,30,10,40,20];
//
//console.log(scores.indexOf(10,2));
//console.log(scores.indexOf(30,3));
//console.log(scores.indexOf(20,-1));
//console.log(scores.indexOf(20,-5));
//
//
//var beasts=["ant","bison","camel","duck","bison"];
//console.log(beasts.indexOf("bison"));
//console.log(beasts.indexOf("bison",2));
//console.log(beasts.indexOf("giraffe"));
//console.log(beasts.indexOf("camel",-3));

//var numbers=[2,5,9,2];
//console.log(numbers.lastIndexOf(2));
//console.log(numbers.lastIndexOf(7));
//console.log(numbers.lastIndexOf(2,3));
//console.log(numbers.lastIndexOf(2,2));
//console.log(numbers.lastIndexOf(2,-2));
//console.log(numbers.lastIndexOf(2,-1));
//var mixArray=["Cat","Ant",3,-5,"bee",56];
//mixArray.sort();
//console.log(mixArray);



//var indices = [];
//var array = ["a","b","a","c","a","d"];
//var ele="a";
//for(i=0;i<array.length;i++){
//    if(array[i]==ele){
//        indices.push(i);
//    }
//        
//    }
//
//console.log(indices);//[0,2,4,]
//var indices = [];
//var array = ["a","b","a","c","a","d"];
//var ele="a";
//var idx=array.indexOf(ele);
//while(idx!=-1){
//    indices.push(idx);
//    idx=array.indexOf(ele,idx+1);
//}
//console.log(indices);
////array.indexOf(ele);//0
////indexOf(ele,1);//2
////indexOf(ele,2);//4

int i = 0;
//Scanner in = new Scanner(System.in);
("Enter a number: ");
i = in.nextInt();
if (i > 25) 
{
i++;
} 
else 
{ 
i--; 
} 
System.out.print(i);







      
