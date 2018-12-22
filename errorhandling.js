//try{
//    console.log("Hello");
//    console.log(sayHello());
//    console.log("This is an error")
//}
//catch(e){
//    console.log("Description " + e.description);
//    console.log("Message " + e.message);
//    console.log("Stack trace: " + e.stack)
//}
//
//finally{
//    console.log("this line is guaranted to excute");
//}

//function divide(){
//    var num1=parseInt(prompt("eEnter NUM1"));
//    var num2=parseInt(prompt("eEnter NUM2"));
//try{
//    if(num2==0){
//      throw{
//          error:"Divide by zero error",
//          message:"Number can not be zero"
//      }  
//    }else{
//        console.log(`Result= ${num1/num2}`)
//    }
//}
//catch(e){
//    console.log(e.error);
//    console.log(e.message);
//}
//
//
//}
//divide();

//function f(){
//   try{
//    console.log(0);
//    console.log(name2);
//}catch(e){
//console.log(1);
//    return true;
//      console.log(2);
//
//    }
//    //finally{
////       console.log(3);
////       return false;
////      console.log(4);
////
////    }
//   console.log(5);
//
//}
//console.log(f());
//
//

function mul(x){
    return function y(a){
        return function z(b){
            return x*a*b;
        }

    }
}
console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));






