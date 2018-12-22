//var plan1Name="Basic";
//var plan1Price="3.99";
//var plan1Space="100";
//var plan1Data="1000";
//var plan1Pages="10";
//
//var plan2Name="Professional";
//var plan2Space="100";
//var plan2Data="5000";
//var plan2Pages="50";
//
//var plan3Name="Ultimate";
//var plan3Space="9.99";
//var plan3Data="2000";
//var plan3Pages="500";
//
//var plan1={
//    name:"Basic",
//    price:3.99,
//    space:100,
//    data:1000,
//    pages:10
//}
//console.log("The cost of the "+ plane1.name + " packege is $"+ plane1.price + " per month.");
//
//var plan2={
//    name:"Professional",
//    price:5.99,
//    space:100,
//    data:5000,
//    pages:50
////}
////console.log("The cost of the "+ plan2.name + " packege is $"+ plan2.price + " per month.");
////
////var car={
////    make:"Fiat",
////    model:500,
////    year:1957,
////    color:"Medium Blue",
////    passenger:2,
////    convertible:false,
////    mileage:8800
////}
////if(car.mileage<5000&&car.make=="Fiat"){
////    console.log("Buy it");
////}else{
////    console.log("Do not buy");
////}
//
////If the current month is July,August,or December. The customer gets a 20% discount on the hosting plan.$anchorScroll
//plan1.discountMonths=[7,8,12];
//plan1.price=4.99;
//
//delete plan1.data;
//console.log(plan1);
//
//console.log("name in plan1");
//
//
//
//var salaries={
//    John:130,
//    Ann:160,
//    Pete:130
//};
//if(salaries.John<=100){
//    salaries.John=120;
//    
//}
//if("Adam" in salaries==false){
//    salaries.Adam=120;
//}
//console.log(salaries);

//var myHonda={
//    color:"red",
//    wheels:4,
//    engine:{
//        cylinders:4,
//        size:2.2
//    },
//    hp:[300,500,100]
//};
//console.log("My Honda Engine Size is "+ myHonda.engine.size +" and hp is "+ myHonda.hp[1]);
//

//var plan1={
//    name:"Basic",
//    price:3.99,
//    space:100,
//    data:1000,
//    pages:10,
//    discountMonths:[7,8]
//};
//function calAnnual(){
//    var bestPrice=plan1.price;
//    for(var i=0;i<plan1.discountMonths.length;i++){
//        if(plan1.discountMonths[i]==7||plan1.discountMonths[i]==8){
//            bestPrice=plan1.price*.8;
//        }
//    }
//    return bestPrice*12;
//}
//var annualPrice=calAnnual();
//console.log(annualPrice);
//
//or

//var plan1={
//    name:"Basic",
//    price:3.99,
//    space:100,
//    data:1000,
//    pages:10,
//    discountMonths:[7,8],
//    calcAnnual:function(percentageDisc){
//    var bestPrice=plan1.price;
//    for(var i=0;i<plan1.discountMonths.length;i++){
//        if(plan1.discountMonths[i]==7||plan1.discountMonths[i]==8){
//            bestPrice=plan1.price*percentageDisc;
//        }
//     }
//   return bestPrice*12;
//    }
//    
//};
//var annualPrice=plan1.calcAnnual(0.85);
//console.log(annualPrice);
//

//===

//var car={
//    make:"Honda",
//    model:"Civic",
//    year:2000,
//    color:"red",
//    mileage:75000,
//    started:false,
//    start:function(){
//          this.started=true;
//    },
//    stop:function(){
//        this.started=false;
//    },
//    drive:function(){
//        if(this.started){
//            console.log("It is running");
//        }else{
//            console.log("You need to start the engin first.");
//        }
//    }
//    
//    
//};
//car.drive();
//car.start();
//car.drive();
//car.stop();
//car.drive();

//var song={
//    name:"Walk this way",
//    artist:"Run D.M.C",
//    minutes:4,
//    seconds:3,
//    genre:"80s",
//    playing:false,
//    play:function(){
//        if(!this.playing){
//            this.playing=true;
//            console.log("Playing "+this.name+" by "+this.artist);
//        }
//        
//    },
//        
//        pause:function(){
//            if(this.playing){
//                this.playing=false;
//            }
//        }
//    };
//    
//song.play();
//song.pause();

//===

//var person={
//    firstName:"Mike",
//    lastName:"Smith",
//    yearOfBirth:1990,
//    job:"Developer",
//    isMarried:true,
//    family:["Bob","John","Emily"],
//    calculateAge:function(){
//        var age=2018-this.yearOfBirth;
//        return age; //you can use it for next
//    }
//    
//};
//
//console.log(person.calculateAge());

//---for in
//var car={
//    make:"Ford",
//    model:"Mustang",
//    year:1955,
//    color:"black",
//    mileage:281341
//}
//for(x in car){
//    console.log(x + ":" + car[x]);
//}
//

//var object1={a:1,b:2,c:3}
//var str="";
//for(x in object1){
//    str=str+x+":"+object1[x]+" ";
//   
//}
//console.log(str); 

//var car = {};
//car.make="Honda";
//car.model="Civic";
//car.mileage=20000;
//car.color="red";
//
//car.drive=function(){
//    console.log("Driving");
//}
//
//console.log(car);
//
//for(var pr in car){
//    console.log(car[pr]);
//}

//var car= new Object();
//
//car.make="Honda";
//car.model="Civic";
//car.mileage=20000;
//car.color="red";
//console.log(car);
 

//function Hotel(name,rooms,booked){
//    this.name;
//    this.rooms;
//    this.booked;
//this.checkAvailability=function(){
//        return this.room-this.booked;
//};
//}
// var ben=new Hotel("Ass",40,25);
// var ben=new Hotel("Park",20,75);

//===

//function ID(name,lastName,age){
//    this.name=name;
//    this.lastName=lastName;
//    this.age=age;
//}
//var ID1=new ID("Mike","Smith",30);
//var ID2=new ID("Mike","Rak",20);
//var ID3=new ID("Ted","Smith",40);
//               
//               
// console.log(ID1.name+ " " + ID1.age);              
// console.log(ID2.name + " " + ID2.lastName);              
// console.log(ID3.name);              

//function Rectangle(width,height){
//    this.width=width;
//    this.height=height;
//    this.area=function(){
//    return this.width*this.height;
//    }
//}
//var R1=new Rectangle(10,20);
//var R2=new Rectangle(15,20);
//var R3=new Rectangle(10,25);
//
//console.log(R1.area());
//console.log(R2.area());
//console.log(R3.area());

//function plan(name,price,space,transfer,pages,discMonth){
//    this.name=name;
//    this.price=price;
//    this.tranfer=transfer;
//    this.pages=pages;
//    this.discMonth=discMonth;
//    this.calcAnnual=function(percentOfDisc){
//        var bestPrice=this.price;
//       for(var i=0;i<this.discMonth.length;i++){
//      if(this.discMonth[i]==7||this.discMonth[i]==8||this.discMonth[i]==12){
//           bestPrice=this.price*percentOfDisc;
//          break;
//          }
//       }
//        return bestPrice*12;
//    
//    }
//
//}
//var p1=new plan("Basic",3.99,100,1000,10,[7,8]);
//var p2=new plan("Professional",5.99,500,5000,50,[7,8,12]);
//var p3=new plan("Ultimate",9.99,2000,20000,50,[7,8]);
//
//var annualPrice=p1.calcAnnual(0.8);
//console.log(annualPrice);
//
//var annualPrice=p2.calcAnnual(0.8);
//console.log(annualPrice);
//
//var annualPrice=p3.calcAnnual(0.8);
//console.log(annualPrice);


//var a="apple";
//console.log(isNaN(a));
//
//var a="23";
//console.log(isNaN(a));
//
//var a="abc23";
//console.log(isNaN(a));
//
//var a=" ";
//console.log(isNaN(a));
//
//var a=23;
//console.log(isNaN(a));

//var a=213.73145;
//console.log(a.toFixed());
//
//var b=213.73145;
//console.log(b.toFixed(3));
//
//var c=213.73645;
//console.log(c.toFixed(2));
//var d=2.13e+15;
//console.log(d.toFixed(2));
//
//b.toPrecision
//var a=13.3714;
//console.log(a.toPrecision());
//console.log(a.toPrecision(2));
//console.log(a.toPrecision(3));
//console.log(a.toPrecision(10));
//
//
//var b=0.001658853;
//console.log(b.toPrecision());
//console.log(b.toPrecision(2));
//console.log(b.toPrecision(3));
//console.log(b.toPrecision(10));
 
//toExponential()

//var c=123456;
//console.log(c.toExponential());
//
//var c=123.45;
//console.log(c.toExponential());

//var num=15;
//var str=num.toString();
//console.log(typeof(num));
//console.log(typeof(str));


//var S1="dfgsdA08awq #23423wefa^$#saaag5345sfs";
//    counter1=0;
//    counter2=0;
//for(var i=0;i<S1.length;i++){
//    
//    if(isNaN(S1.charAt(i))){
//       counter1++; 
//        
//    }
//    else {
//        counter2++;
//        
//    }
//}
//console.log("Character =" +counter1);
//console.log("Num =" + counter2);
//

//var a= Math.round(2.60);
//console.log(a);
//var a= Math.round(2.50);
//console.log(a);
//var a= Math.round(2.49);
//console.log(a);
//var a= Math.round(-2.50);
//console.log(a);
//var a= Math.round(-2.49);
//console.log(a);
//var a= Math.round(-2.60);
//console.log(a);


//var a= Math.sqrt(0);
//console.log(a);
//
//var a= Math.sqrt(1);
//console.log(a);
//
//var a= Math.sqrt(-9);
//console.log(a);
//
//var a= Math.sqrt(9);
//console.log(a);
//
//var a= Math.sqrt(64);
//console.log(a);

//var a= Math.floor(0.60);
//console.log(a);
//
//var a= Math.floor(0.40);
//console.log(a);
//
//var a= Math.floor(5);
//console.log(a);
//
//var a= Math.floor(-5.1);
//console.log(a);
//
//var a= Math.floor(-5.9);
//console.log(a);
//
//var a= Math.floor(5.1);
//console.log(a);


//var a= Math.ceil(.60);
//console.log(a);
//
//var a= Math.ceil(.40);
//console.log(a);
//
//var a= Math.ceil(5);
//console.log(a);
//
//var a= Math.ceil(5.1);
//console.log(a);
//
//var a= Math.ceil(-5.1);
//console.log(a);
//
//var a= Math.ceil(-5.9);
//console.log(a);

////Return a random numbers between 0 and 1
//var a=Math.random();
//console.log(a);
//
////Return a random numbers between 1 and 10
//var a=Math.random()*10+1;
//console.log(a);
//
////Return a random numbers between 1 and 100
//var a=Math.random()*100+1;
//console.log(Math.round(a));


// var a=Math.random()*200;
// //console.log(Math.round(a));
//if(a>100){
//    console.log(Math.round(a) + " true");
//}else{
//    console.log(Math.round(a) + " false");
//}


//Date

//var d=new Date();
//console.log(d);
//
//
//var a=new Date(100000000);
//console.log(a);
//
//var d=new Date("November 05,2018 11:13:00");
//console.log(d);
//
//var d=new Date(80,10,05,11,33,30,0);
//console.log(d);
//
//var d=new Date(2018,3);
//console.log(d);
//
//var d=new Date(98,5);
//console.log(d);

//var d=new Date("2018-03-25");
//console.log(d);
//
//var d=new Date("03/25/2015");
//console.log(d);
//var d=new Date("March 25 2018");
//console.log(d);
//var d=new Date("Wednesday March 25 2015");
//console.log(d);

//var moonLanding=new Date("July 20,69 00:18");
//console.log(moonLanding.getFullYear());
//
//
//var today =new Date();
//var year=today.getFullYear();
//console.log(year);

//var moonLanding=new Date("July 20,69 00:20:18");
//console.log(moonLanding.getMonth());
//
//
//var today =new Date();
//var month=today.getMonth();
//console.log(month);
//
//var moonLanding=new Date("July 20,69 00:20:18");
//console.log(moonLanding.getDate());
//
//
//var today =new Date();
//var date=today.getDate();
//console.log(date);

//var moonLanding=new Date("July 20,69 08:20:18");
//console.log(moonLanding.getHours());
//
//
//var today =new Date();
//var hour=today.getHours();
//console.log(hour);

//var moonLanding=new Date("July 20,69 08:20:18");
//console.log(moonLanding.getMinutes());
//
//
//var today =new Date();
//var minutes=today.getMinutes();
//console.log(minutes);

//var moonLanding=new Date("July 20,69 08:20:18");
//console.log(moonLanding.getMinutes());
//
//
//var today =new Date();
//var minutes=today.getMinutes();
//console.log(minutes);

//var moonLanding=new Date("July 20,69 08:20:18");
//console.log(moonLanding.getTime());
//
//var today =new Date();
//var time=today.getTime();
//console.log(time);

//var moonLanding=new Date("July 20,69 08:20:18");
//console.log(moonLanding.getDay());
//
//
//var today =new Date();
//var day=today.getDay();
//console.log(day);


//set date

//var event=new Date(("August 19,1975 23:15:30"));
//event.setDate(24);
//console.log(event.getDate());
//console.log(event);
//
//
//var theBigDay=new Date(1962,6,7);
//theBigDay.setDate(24);
//console.log(theBigDay);
//theBigDay.setDate(32);
//console.log(theBigDay);
//theBigDay.setDate(42);
//console.log(theBigDay);

//var event=new Date(("August 19,1975 23:15:30"));
//event.setFullYear(2018);
//console.log(event.getFullYear());
//console.log(event);
//
//
//var theBigDay=new Date(1962,6,7);
//theBigDay.setFullYear(2018,11,3);
//console.log(theBigDay);

//var event=new Date(("August 19,1975 23:15:30"));
//event.setHours(20);
//console.log(event);
//
//event.setHours(20,21,22);
//console.log(event);
//
//var theBigDay=new Date();
//theBigDay.setHours(7);
//console.log(theBigDay);

//var event=new Date(("August 19,1975 23:15:30"));
//event.setMinutes(100);
//console.log(event);
//
//var theBigDay=new Date();
//theBigDay.setMinutes(18);
//console.log(theBigDay);

//var event=new Date(("August 19,1975 23:15:30"));
//event.setMonth(3);
//console.log(event);
//
//var theBigDay=new Date();
//theBigDay.setMonth(7);
//console.log(theBigDay);

//var event=new Date(("August 19,1975 23:15:30"));
//event.setSeconds(00);
//console.log(event);
//
//var theBigDay=new Date();
//theBigDay.setSeconds(10);
//console.log(theBigDay);

//setTime

//var event1=new Date("July 1,1999");
//var event2=new Date();
//event2.setTime(event1.getTime());
//
//console.log(event1);
//console.log(event2);


var birthDay=new Date("09/15/2000");
var today=new Date();

var years=today.getFullYear()-birthDay.getFullYear();
birthDay.setFullYear(today.getFullYear());

if(today<birthDay){
    years--;
}

console.log(years);






