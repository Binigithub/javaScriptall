//Q1

//var mark;
//mark=parseInt(prompt("Enter the score"));
//if(mark>=0&&mark<60){console.log("Fail");
//           }
//else if(mark>=60&&mark<90){
//    console.log("Pass");
//                          }
//else if(mark>=90&&mark<=100){console.log("Passed with Distinction");
//                 }
//else{console.log("Wrong entry");
//    }

//Q2

//var userName,passWord,expecteduser,expectedpassword;
//userName=prompt("Enter user name");
//passWord=prompt("Enter your password");
//expecteduser="bini";
//expectedpassword="ab123";
//
//if(userName==""&&passWord==""){console.log("username and password cannot be empty");
//                                 }
//else if(userName==""&&passWord!=""){console.log("username can not be empty");
//                                       }
//else if(userName!=""&&passWord==""){console.log("password can not be empty");
//                                       }
//else if(userName!=expecteduser||passWord!=expectedpassword){console.log("Username or password is not valid. Please verify");
//                                       }
//else if(userName==expecteduser&&passWord==expectedpassword){console.log("User Logged in successfully");
//                                       }
//else{console.log("Contact customer service");
//    }

//Q3

//var num1,num2,res1,res2,res3,res4,operator;
//num1=prompt("Enter the first number");
//num2=prompt("Enter the second number");
//operator=prompt("Please enter operator");
//res1=(num1+num2);
//res2=(num1-num2);
//res3=(num1/num2);
//res4=(num1*num2);

//if(num1==""||num2==""){
//    console.log("Please enter valid numbers");
//    }
//else { 
//    num1=parseInt(num1);
//    num2=parseInt(num2);
//if (operator== "+" ){console.log(num1 + "+" + num2 + "=" + res1);
//                          }
//else if(operator== "-" ){console.log(num1 + "-" + num2 + "=" + res2);
//}
//else if(operator== "/"){console.log(num1 + "/" + num2  + "=" + res3);
//        }
//else if(operator== "*"){console.log(num1 + "*" + num2  + "=" + res4);
//                     }
//else{console.log("Wrong entry");}
//     }

//Q4

//var income,gross,tax;
//gross=parseInt(prompt("Enter your gross income"));
//
//if(gross<0){console.log("Your tax is 0");
//           }
//else{
//if(gross<=150000000){
//    tax=gross*.25;
//    income=gross-tax; 
//    console.log("Your tax is " + "$" + tax + " and Your income is " + "$" + income);
//}
//else if(gross<=300000000){ 
//      tax= 37500000 + ((gross-150000000)*.3);
//      income=gross-tax;
//      console.log("Your tax is " + "$"+ tax + " and Your income is " + "$" + income);
//    }                 
//   
//    else if(gross<=600000000){
//      tax=37500000 + 45000000 + ((gross-300000000)*.35);
//      income=gross-tax;
//      console.log("Your tax is " + "$"+ tax + " and Your income is " + "$" + income);
//    }
//    
//    else if(gross<=1200000000){
//      tax=37500000 + 45000000 + 105000000 + ((gross-600000000)*.4);
//      income=gross-tax;
//      console.log("Your tax is " + "$"+ tax + " and Your income is " + "$" + income);
//    
//    }
//    else if(gross>1200000000){
//      tax=37500000 + 45000000 + 105000000 + 240000000 + ((gross-1200000000)*.5);
//      income=gross-tax;
//      console.log("Your tax is " + "$"+ tax + " and Your income is " + "$" + income);
//    
//    }
//    else{console.log("Wrong entry");
//        }
//}

//
////Q5
//
//var year;
//year=parseInt(prompt("Enter your year in yyyy format"));
//if((year%100==0)&&(year%400!=0)){console.log("Not a leapyear");
//                                }
//   else if(year%4==0){
//   console.log("Leapyear");
//       
//    }
//else{console.log("Not a leapyear");
//    }
//
//
////Q6
//
//var bill,call;
//call=parseInt(prompt("Enter number of calls"));
//bill=200;
//if(call<0){console.log("Wrong input");
//          }
//else{
//   if(call<=100){
//    console.log("Your bill is " + "$" + bill);
//        }
//    else if(call<=150){ 
//    bill=200 + ((call-100)*.6);
//    console.log("your bill is " + "$" + bill ); 
//          }
//   else if(call<=200){
//    bill=200 + ((call-100)*.6) + ((call-150)*.5);
//    console.log("your bill is " + "$" + bill ); 
//   }
//   else if(call>200){
//    bill=200 + ((call-100)*.6) + ((call-150)*.5) + ((call-200)*.4);
//    console.log("your bill is " + "$" + bill ); 
//         }
//
//    else{console.log("Numbers only");
//         } 
//     }
//




















