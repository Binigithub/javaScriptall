//Q1

var num;
num=parseInt(prompt("Enter your number"));

switch(num%2==0){
        
    case true:
         console.log("Your number is even");
         break;
    case false:
         console.log("Your number is odd");
         break;
    default:
        console.log("Invalid Input");
        break;
}


////Q2
//
//var num;
//num=parseInt(prompt("Enter a number"));
//switch(num){
//   case 0:
//   case 1:
//   case 2:
//    console.log("Low Number");
//    break;
//    case 3:
//    case 4:
//    case 5:
//    console.log("Medium Number");
//        break;
//    default:
//        console.log("Other Number");
//        break;
//}
//
////Q3
//
//var total,discount;
//total=parseInt(prompt("Enter the total amount for shopping"));
//switch(total){
//        
//    case 1000:
//        discount=1000*.05;
//        console.log("The amount you pay is " + "$" + (total-discount));
//        break;
//        
//    case 10000:
//        discount=10000*.08;
//        console.log("The amount you pay is " + "$" + (total-discount));
//        break;
//    default:
//        console.log("the amount you pay is " + "$" + total);
//        break;
//    
//}
//
//
////Q4
//var color;
//color=prompt("Enter color");
//switch(color){
//    case "R": case "r":
//        console.log("Red");
//        break;
//    case "O": case "o":
//        console.log("Orange");
//        break;
//    case "G": case "g":
//        console.log("Green");
//        break;
//    default:
//        console.log("Wrong entry");
//        break;
//        
//}
//


