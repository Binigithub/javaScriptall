//Main Screen has two main products
//            1.Vegetables 2.Fruits
//
// 
//if user enter 1 (vegetables ) , list 5 vegetables with price
//if user enter 2 (fruit) list 5 fruits with price
//if user enter different input from 1 and 2,
//-alert "Please enter valid option"
//Accepts 1-5 for vegetables or fruits selection,
//if user enter different input, show "Please enter valid option"
//after product selection,  user should enter amount between 1 to 100.
//if different than this range show "Please enter amount between 1 to 100"
//after amount entrance,  show total price and ask "do you want to shop more ?"
//if user enter 1 (yes) start from main product, at the same time keep previous total and add new total it
//if no (2) show total price say thank you
//first selection only accepts 1 or 2, if not ask again
//second selection only accept 1-5 ,if not ask again
//amount only accept numbers 1 to 100, if not ask again
//continue selection only accept 1 or 2 if not ask again
//Vegetables
//Cucumber   $2.5
//Tomatoes    $3
//Onion          $1.5
//Pepper        $2
//Carrot         $4
//Fruits
//Orange         $3.5
//Banana         $4
//WaterMelon  $7
//Apple             $8  
//Cherry            $4

//project2
// v = vegetable
// pv = price of vegi
// f = fruits
// pf = price of fruits

//var v1,v2,v3,v4,v5,pv1,pv2,pv3,pv4,pv5,f1,f2,f3,f4,f5,pf1,pf2,pf3,pf4,pf5,mainProduct,vegiProduct,amountV,totalV,total,askAgain;
////Vegetables
//v1="Cucumber";
//v2="Tomatoes";    
//v3="Onion";          
//v4="Pepper";        
//v5="Carrot";
//
////price of vegies
//pv1=2.5;
//pv2=3;
//pv3=1.5;
//pv4=2;
//pv5=4;
//
////fruits
//
//f1="Orange";        
//f2="Banana";        
//f3="WaterMelon";  
//f4="Apple";              
//f5="Cherry";
////price of fruits
//pf1=3.5;
//pf2=4;
//pf3=7;
//pf4=8;
//pf5=4;
//total=0;
//mainLoop:   
//
//do{
//
//mainProduct = prompt("What type of product you want to buy ? \n1-Vegetables \n2-Fruits");
//
//
//
//if(mainProduct==1){
//
//    vegiLoop:
//
//    do{
//
//    vegiProduct=prompt("1-"+v1+" $"+pv1+"\n2-"+v2+" $"+pv2+"\n3-"+v3+" $"+pv3+"\n4-"+v4+" $"+pv4+"\n5-"+v5+" $"+pv5);
//
//    if(vegiProduct==1){
//
//       do{
//
//        amountV=prompt("Please enter the amount of "+v1);
//
//        if(amountV>0&&amountV<=100){
//
//           amountV=parseInt(amountV);
//
//           totalV=amountV*pv1;
//
//            break vegiLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//
//        }
//
//        //amount loop
//
//       }while(true);
//}
//
//    else if(vegiProduct==2){
//
//        do{
//
//        amountV=prompt("Please enter the amount of "+v2);
//
//        if(amountV>0&&amountV<=100){
//
//           amountV=parseInt(amountV);
//
//           totalV=amountV*pv2;
//
//            break vegiLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//
//        }
//
//        //amount loop
//
//       }while(true);
//}
//
//    else if(vegiProduct==3){
//
//               do{
//
//        amountV=prompt("Please enter the amount of "+v3);
//
//        if(amountV>0&&amountV<=100){
//
//           amountV=parseInt(amountV);
//
//           totalV=amountV*pv3;
//
//            break vegiLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//
//        }
//
//        //amount loop
//
//       }while(true);
//}
//
//    else if(vegiProduct==4){
//
//               do{
//
//        amountV=prompt("Please enter the amount of "+v4);
//
//        if(amountV>0&&amountV<=100){
//
//           amountV=parseInt(amountV);
//
//           totalV=amountV*pv4;
//
//            break vegiLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//
//        }
//
//        //amount loop
//
//       }while(true);
//}
//     else if(vegiProduct==5){
//          do{
//amountV=prompt("Please enter the amount of "+v5);
//
//        if(amountV>0&&amountV<=100){
//
//           amountV=parseInt(amountV);
//
//           totalV=amountV*pv5;
//
//            break vegiLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//
//        }
//
//        //amount loop
//
//       }while(true);
//   }
//
//    else{
//
//        alert("please enter valid option");
//
//    }
//
//    //vegiLoop
//
//    }while(true);
//
//    
//
//    total+=totalV;
//
//    alert("you cart total is: "+total);
//
// 
//
//    //asking again after showing the total  
//
//    do{
//
//    askAgain=prompt("Do you want to continue shopping ? \n1-Yes \n2-No");
//
//    if(askAgain==1){
//
//        continue mainLoop;
//
//    }else if(askAgain==2){
//
//        break mainLoop;
//
//    }else{
//
//        alert("Please enter the valid option")
//
//    }
//
//    }while(true);
//
//}else if(mainProduct==2){
//
//    fruitLoop:
//
//    do{
//
//    fruitProduct=prompt("1-"+f1+" $"+pf1+"\n2-"+f2+" $"+pf2+"\n3-"+f3+" $"+pf3+"\n4-"+f4+" $"+pf4+"\n5-"+f5+" $"+pf5);
//
//    if(fruitProduct==1){
//
//       do{
//
//        amountF=prompt("Please enter the amount of "+f1);
//
//        if(amountF>0&&amountF<=100){
//
//           amountF=parseInt(amountF);
//
//           totalF=amountF*pf1;
//
//            break fruitLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//}
//
//        //amount loop
//
//       }while(true);
//}
//
//    else if(fruitProduct==2){
//
//        do{
//
//        amountF=prompt("Please enter the amount of "+f2);
//
//        if(amountF>0&&amountF<=100){
//
//           amountF=parseInt(amountF);
//
//           totalF=amountF*pf2;
//
//            break fruitLoop;  
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//
//        }
//
//        //amount loop
//
//       }while(true);
//
//        }
//
//    else if(fruitProduct==3){
//
//       do{
//
//        amountF=prompt("Please enter the amount of "+f3);
//
//        if(amountF>0&&amountF<=100){
//
//           amountF=parseInt(amountF);
//
//           totalF=amountF*pf3;
//
//            break fruitLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//
//        }
//
//        //amount loop
//
//       }while(true);
//
//
//
//    }
//
//    else if(fruitProduct==4){
//
//        do{
//
//        amountF=prompt("Please enter the amount of "+f4);
//
//        if(amountF>0&&amountF<=100){
//
//           amountF=parseInt(amountF);
//
//           totalF=amountF*pf4;
//
//            break fruitLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//
//        }
//
//        //amount loop
//
//       }while(true);
//
//    }
//
//    else if(fruitProduct==5){
//
//          do{
//
//        amountF=prompt("Please enter the amount of "+f5);
//
//        if(amountF>0&&amountF<=100){
//
//           amountF=parseInt(amountF);
//
//           totalF=amountF*pf5;
//
//            break fruitLoop;   
//
//        }else{
//
//            alert("Please enter the amount between 1 to 100");
//}
//   //amount loop
//
//       }while(true);
//}
//
//    else{
//
//        alert("please enter valid option");
//
//    }
//
//    //fruit loop
//  }while(true);
//total+=totalF;
//
//    alert("you cart total is: "+total);
////asking again after showing the total  
//do{
//askAgain=prompt("Do you want to continue shopping ? \n1-Yes \n2-No");
//
//    if(askAgain==1){
//
//        continue mainLoop;
//}else if(askAgain==2){
//  break mainLoop;
//  }else{
//  alert("Please enter the valid option")
//}
//}while(true);
//}else{
//alert("please enter valid option");
// continue;
//}
//}while(true);
//alert("Your cart total is:"+total+"\nThank you for shopping with us");
//



   

   

   

   

   

   
















//OR
//var vegatables=[["Cucumber","Tomatoes","Onions","Pepper","Carrot"],[2.5,3,1.5,2,4],
//["Orange","Banana","Watermelon","Apple","Cherry"],[3.5,4,7,8,4]]
//var input;var bool=true; var total=0;
//do{
//input=parseInt(prompt("What type of product you want to buy, please enter number \n 1-Vegetables \n 2-Fruits"));
//if(input==1 || input==2 ){
//   do{
//    var bool1=false;
//    if(input==1){
//    var inV=prompt(" 1.Cucumber $2.5 \n 2.Tomatoes $3 \n 3.Onions $1.5 \n 4.Pepper $2 \n 5.Carrot $4");
//    }else {
//      var inV=prompt(" 1.Orange $3.5 \n 2.Banana $4 \n 3.Watermelon $7 \n 4.Apple $8 \n 5.Cherry $4");}
//      if(inV>=1 && inV<=5){
// do{
//   if(input==1){
//    var inV1=prompt("Please Enter amount of "+vegatables[input-1][inV-1]);
//    if(inV1<=100 && inV1>=1){
//       total=total+inV1*vegatables[input][inV-1];}
//     } if(input==2){
//       var inV1=prompt("Please Enter amount of "+vegatables[input][inV-1]);
//      if(inV1<=100 && inV1>=1){
//       total=total+inV1*vegatables[input+1][inV-1];}
//       }
//      if(inV1<=100 && inV1>=1){
//       alert("Your total will be $"+total);
//       var inV2=prompt("\n Do you want to shop more \n 1.Yes \n 2.No");
//        if(inV2==1){
//            bool2=false;
//             bool1=false;
//        }
//        if(inV2==2){
//          alert("Your cart total is $"+total+"\n Thank you for shopping with us");
//           var bool2=false;
//            bool1=false;
//             bool=false;
//            }else if(inV2!=1 && inV2!=2){
//            bool2=true;
//           alert("Please enter Valid number from 1-2");}
//         }else{alert("Please enter Valid number from 1-100");
//         bool2=true;}
//        }while(bool2==true);
//    }else{
//    alert("Please enter a number between 1-5");
//bool1=true;}
// }while(bool1==true);
//}else{
//alert("Please enter valid number between 1-2 ");}
//} while(bool==true);
//
//






   

   

   

   

   

   

   









//Project Requirements
//
//1. Build a function constructor called Question to describe a question. A question should include:
//   a)Question itself
//   b)The answer from which the player can choose the correct one (choose an adequate data structure here, array, object,etc)
//   c)Correct answer(I would use a number for this)
//
//2. Create a couple of questions using the constructor
//
//   Question 1-Is JavaScript the coolest programming language in the world?
//   Answers 1-Yes,No
//   Correct Answer1-Yes
//
//   Question 2-What is the name of this course's teacher?
//   Answers 2-Mike,John,Ozzy
//   Correct Answer2-Ozzy
//
//   Question 3-What does best describe coding?
//   Answers 3-Boring,Hard,Fun,Tedious
//   Correct Answer3-Fun
//
//3. Store them all inside an array
//
//4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint:write a method for the question objects for this task)
//
//5. Use the prompt function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4
//
//6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method f
//project1

////Q1
//
//function question(question,answer,correct){
//    this.question=question;
//    this.answer=answer;
//    this.correct=correct;
//    
//     this.question=["1-Is JavaScript the coolest programming language in the world?","2-What is the name of this course's teacher?","3-What does best describe coding?"];
//     this.answer=["\n 1.Yes \n 2.No","\n 1.Mike \n 2.John \n 3.Ozzy","\n 1.Boring \n 2.Hard\n 3.Fun \n 4.Tedious"];
//    
//    for(i=0;i<this.question.length;i++){
//    var ran=Math.floor(Math.random()*this.question.length+0);
//this.que=function(){
//          if(ran==0){
//              return this.question[0]+this.answer[0];
//          }else if(ran==1){
//             return this.question[1]+this.answer[1];
//          }else if(ran==2){
//             return this.question[2]+this.answer[2];
//        }
//     }
//    }
//    this.correct=prompt("Enter your answer 1 to 4" +"\n"+this.que()); 
//        this.correctAns=function(){
//            if((ran==0&&this.correct=="1")||(ran==1&&this.correct=="3")||(ran==2&&this.correct=="3")){
//               return "Correct";
//            }else{
//                     return "Answer not correct Try later!";
//             }
//        }
//        
//    }
// var q1=new question("question","answer","correct");  
// var ans=q1.correctAns();
// alert(ans);
//    
//  
//    





