//Functions are first class objects. Have the abillity to do
//   1. be assigned to variables.
//   2. have function in them 
//   3. return other function to be called later 

// A callback function is a funcion passed into other function as an argument

//let x=function(){
//    console.log("I am called from a function");
//    
//}
//let z=function(){
//    console.log("I am called from a function second");
//}
//let y= function(callback){
//    console.log("do something");
//    callback();
//}
//y(x);
//y(z);


//let calc =function(n1,n2,calcType){
//    if(calcType=="add"){
//        return n1+n2;
//    }else if(calcType=="multiply"){
//        return n1*n2;
//    }
//}
//console.log(calc(2,3,"add"));

//let add=function(a,b){
//    return a+b;
//}
//let multiply =function(a,b){
//    return a*b;
//}
//let calc=function(n1,n2,callback){
//    if(typeof callback=="function"){
//    
//    return callback(n1,n2);
//    }
//}
////console.log(calc(2,3,add));
////console.log(calc(2,3,multiply));
//
//console.log(calc(2,3,function(a,b){  //anonymous function
//    //return a-b;
//    return a*b;
//}));

//let students=[
//
//   {name:"Mary",score:90,school:"East"},
//
//   {name:"James",score:100,school:"East"},
//
//   {name:"Steve",score:40,school:"East"},
//
//   {name:"Gabe",score:90,school:"West"},
//
//   {name:"Racheal",score:85,school:"East"},
//
//   {name:"Smith",score:95,school:"West"}
//
//];
//let processStudents=function (students,callback){    
//    for (let i=0;i<students.length;i++){
//
//       if(students[i].school.toLowerCase()=="east"){
//
//           if (typeof callback =="function"){
//
//               callback(students[i]);
//
//           }
//
//       }
//
//   }
//
//}
//processStudents(students,function(x){
//
//   if(x.score>60){
//
//   console.log(x.name + " passed");
//
//}
//
// })
//
//
////write a function that computes the total of all scores together for east and also counts how many students are in our test
//
// let deterMineTotal =function(){    
//     let total=0;
//     let count=0;    
//     processStudents(students,function(x){
//
//       total =total +x.score;
//       count++;
//   })
//
//   console.log(`Total score: ${total} - Total count: ${count}`)
//
//}
// deterMineTotal();


//let students = [
//
//    {name:"Mary",score:90,school:"East"},
//
//    {name:"James",score:100,school:"east"},
//
//    {name:"Steve",score:40,school:"East"},
//
//    {name:"Gabe",score:90,school:"West"},
//
//    {name:"Racheal",score:85,school:"East"},
//
//    {name:"Smith",score:95,school:"West"}
//
//];
//
//
//
//let processStudents = function(data,callback){
//
//    for(let i=0; i<data.length; i++){
//
//        if(data[i].school.toLowerCase() == "east"){
//
//            if(typeof callback == "function"){
//
//                callback(data[i]);
//
//            }
//
//            
//
//        }
//
//    }
//
//}
//
//
//
//processStudents(students, function(x){
//
//    if(x.score>60){
//
//        console.log(x.name + " passed");
//
//    } else{
//
//        console.log(x.name + " NOT PASSED");
//
//    }
//
//});

//// write a function that computes the total of the all the scores together for east and also account
//
//// so how many students are in our east
//
//var total =0;
//
//var count =0;
//
//processStudents(students, function(x){
//
//    total += x.score;
//
//    console.log(`total is: ${total}`);
//
//    count++;
//
//    console.log(`number of student is: ${count}`);
//
//})
//
//
//
//
//
