//ES5

//var Person5=function(name,yearOfBirth,job){
//    this.name=name;
//    this.yearOfBirth=yearOfBirth;
//    this.job=job;
//}
//    
//
//Person5.prototype.culculatage=function(){
//  var age=new Date().getFullYear()-this.yearOfBirth;
//    console.log(age);
//    }
// var mike5= new Person6("Mike",1980,"tester");
//ES6

//class Person6{
//   constructor(name,yearOfBirth,job){
//       this.name=name;
//       this.yearOfBirth=yearOfBirth;
//       this.job=job;
//   } 
//    calculateAge(){
//       var age=new Date().getFullYear()-this.yearOfBirth;
//       console.log(age); 
//    }
//}
//
//let mike6= new Person6("Mike",1980,"tester");
//mike6.calculateAge();

//Static methods

//static methods are simply attached to classes.

//class Person6{
//   constructor(name,yearOfBirth,job){
//       this.name=name;
//       this.yearOfBirth=yearOfBirth;
//       this.job=job;
//   } 
//    calculateAge(){
//       var age=new Date().getFullYear()-this.yearOfBirth;
//       console.log(age); 
//    }
//     static greeting(){
//        console.log("Hello");
//    }
//}
//
//let mike6= new Person6("Mike",1990,"tester");
//mike6.calculateAge();
//Person6.greeting();

//when to use static methods?
//1.If you are writing utility classes and they are not supposed to changed.
//1.If there is some code that can easily be shared by all the instance methods, extract that code
//1.If you are sure that the definition of the method will never be changed or overridden. as static methods can not overridden.

//function bycycle5(cadence,speed,gear,tirePressure){
//    this.cadence=cadence;
//    this.gear=gear;
//    this.speed=speed;
//    this.tirePressure=tirePressure;
//    
//    inflatTire=function(){
//    this.tirePressure+3;
//}
//}
//var b5=bycycle5(50,20,4,25);
//console.log(b5);


//Inheritance

//class Animal{
//  constructor(name){
//      this.name=name;
//  }  
//}
//
//class Dog extends Animal{
//    constructor(name){
//    super(name);
//}
//}
//
//let d1= new Dog("abc");
//console.log(d1.name);
//
//
//class Person{
//    constructor(name,age,weight){
//        this.name=name;
//        this.age=age;
//        this.weight=weight;
//    }
//    displayName(){
//        console.log(this.name);
//    }
//    displayAge(){
//        console.log(this.age);
//    }
//    displayWeight(){
//        console.log(this.weight);
//    }
//}
//
//class programmer extends Person{
//    constructor(name,age,weight,language){
//        super(name,age,weight);
//        this.language=language;
//    }
//    displayLanguage(){
//        console.log(this.language);
//    }
//}
//
//
//let mike=new Person("Mike",25,120);
//mike.displayName();
//mike.displayAge();
//mike.displayWeight();
//console.log("......");
//
//let john=new programmer("John",16,150,"Java");
//john.displayName();
//john.displayAge();
//john.displayWeight();
//john.displayLanguage();

class vehicle{
    start(){
        console.log("starting vehicle");
    }
}
class car extends vehicle{
    start(){
        super.start();
        console.log("starting car");
        
    }
}
let honda=new vehicle();
honda.start();


//Getter and Setters

//class GetThings{
//    constructor(size){
//        this.length=size;
//    }
//    get Length(){
//        return this.length;
//    }
//    set Length(value){
//        this.length=value;
//        console.log("The value has been set");
//    }
//}
//
//var thing= new GetThings(9);
//console.log(thing.Length);
//thing.Length=10;
//console.log(thing.Length);

//class encapTest{
//constructor(name,id,age){
//    this._name=name;
//    this._id=id;
//    this._age=age;
//}
//    get Age(){
//    return this.age;
//}
//get Name(){
//    return this.name;
//}
//  get Id(){
//    return this.id;
//}
//  set Age(newAge){
//    this.age=newAge;
//}
//   set Id(newId){
//    this.id=newId;
//}
//    set Name(newName){
//    this.name=newName;
//}
//}
//let encap=new encapTest();
//encap.Name="Mike";
//encap.Age=20;
//encap.id="MK30";
//console.log(`Name: ${encap.Name} Age: ${encap.Age} ID: ${encap.id}`);
// 
//let encap2 = new encapTest("Mike",20,"MS30");
//
//console.log(`Name: ${encap2.Name} Age: ${encap2.Age} ID: ${encap2.Id} `);
//
//





