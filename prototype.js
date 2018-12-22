//in java we created classes and put methodst inside and inherited these methods by using EXTENDS

//JS (ES5)doesnt have classes but have prototypes//its not exactly same as class because youdont create instance of it but you can create methodsa that affect multiple objects by using prototypes

//

//function Bicycle (cadence,speed,gear,tirePresure){

//    this.cadence=cadence;

//    this.speed=speed;

//    this.gear=gear;

//    this.tirePressure=tirePresureTires;

//

//    this.inflateTires=function(){

//        return this.tirePresure+=3;

//    }

//}

//

//var b1=new Bicycle(50,20,4,25)

//b1.inflateTires();

//

//function Mechanic (name){

//    this.name=name;

//}

//

//var m1=new Mechanic("Mike")  //I want to give mike acces to inflatetires method

//whenever you create a function JS create 2 obj automatically

//1- function name object

//2- prototype object

//function foo(){};

//function bar(){};//

//function greet(){

//    console.log("Hello")

//}

//

//console.log(greet()); //hello

//console.log(greet); //function obj

//console.log(greet.prototype); //prototype obj//when you create new obj , __proto__ is created by JS Engine

//

//function foo(){}

//var obj =new foo();

//console.log(obj)

//

////set a property to foo ptototype and access it from obj

//

//foo.prototype.test="this is object"

//console.log(obj.__proto__.test);

//

//

//

//obj.__proto__.hello="test"

//console.log(obj.hello)

//

//obj.test=10;function Employee(name){

   this.name=name;

}var emp1=new Employee("Mike");

var emp2=new Employee("Smith");Employee.prototype.playPranks=function(){

   console.log("Prunk played");

}emp1.playPranks();

emp2.playPranks();//In class modules,you have to define all method upfront

//In prototype you can put things at run time

//the minute you add that exstra property  every object that was created from the employee as a constractor, even the ones that were created before you added that on the property would still work,because the prototype look up happens at run time//var simple={};

//var obj=new Object()

//console.log(simple.__proto__===obj.__proto__)

//

//console.log(obj.__proto__==Object.prototype)function Employee (){};

   var emp=new Employee();   // emp.test;emp.prop="Employee";

emp.__proto__.parentProp="Parent of Employer";

console.log(emp.__proto__.__proto__===Object.prototype);Object.prototype.grandParentProp="Grant Parent";function foo(){}

var tmp=new foo();

console.log(tmp.grandParentProp)console.log(emp.__proto__.__proto__);function Employee(name){

   this.name=name;}Employee.prototype.getName=function(){

   return this.name

}

var emp1=new Employee("Mike")

console.log(emp1.getName())//you have employee object and some behavior, also you have manager object. Manager are alse employees and have common properties but managers have their own behavior as wellfunction Manager(name,dept){

   this.name=name;

   this.dept=dept;

}

Manager.prototype.getDept=function(){

   return this.dept;

}var mgr=new Manager("Michael","Sales");

console.log(mgr.getDept());

//console.log(mgr.getName());//one way -to share is putting all common properties in the object prototype

//second way - manager's prototype __proto__ points to Employee's prototype NOT Object's prototypemgr.__proto__.__proto__=Employee.prototype;

console.log(mgr.getName())










