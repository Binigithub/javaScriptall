//ass20

//Q1
// var mark={
//     fistName:"Mark", 
//     lastName:"Smith",
//     mass:    100,
//     height:  1.8,
//     calculateBmi:function(){
//     var Bmi=(this.mass)/(this.height*this.height);
//     return Bmi;
//     }
//     };
// var john={
//     fistName:"John",
//     lastName:"Mike",
//     mass:   100,
//     height: 1.7,
//     calculateBmi:function(){
//     var Bmi=(this.mass)/(this.height*this.height);
//     return Bmi;
//     }
// };
//if(mark.calculateBmi()>john.calculateBmi()){
//    console.log(mark.fistName +" "+ mark.lastName +" BMI is greater = "+ mark.calculateBmi().toFixed());
//}else if(john.calculateBmi()>mark.calculateBmi()){
//    console.log(john.fistName +" "+ john.lastName +" BMI is greater = "+ john.calculateBmi().toFixed());
//}else if(mark.calculateBmi()==john.calculateBmi()){
//    console.log("Mark and John has same BMI");
//}
 

//Q2 Ozzy

function Salary(firstName,lastName,gender,age,studyinghours){

    this.firstName=firstName;

    this.lastName=lastName;

    this.gender=gender;

    this.age=age;

    this.studyinghours=studyinghours;

    this.calcAverage=function(){
       var sum=0;
       for(var i=0;i<this.studyinghours.length;i++){

            sum=sum+this.studyinghours[i];

        }

        var average = sum / this.studyinghours.length;

        return average;

     }

    this.calcSalary=function(baseSalary){

        if(this.calcAverage()>5 && this.calcAverage()<=7){

             return baseSalary=Math.floor(baseSalary*1.1);

        }else if(this.calcAverage()>7 && this.calcAverage()<=9){

             return baseSalary=Math.floor(baseSalary*1.2);

        }else if(this.calcAverage()>9 && this.calcAverage()<=10){

             return baseSalary=Math.floor(baseSalary*1.5);

        }else{

            return "Not eligible";

        }

    }

}

var hours=[];

for(var i=0;i<5;i++){

    hours[i]=parseInt(prompt("Enter your hours for week" + (i+1)));

}

var s1=new Salary("Mike","Smith","M","20",hours);

console.log(s1.calcSalary(100000));


















