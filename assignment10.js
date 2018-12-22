////Q1
//
//var myArray=Array(100)
//for(var i=0;i<myArray.length;i++){
//  myArray[i]=Array(10);
//}
//var ctr=1
//for (var i=0;i<myArray.length;i++){
//   for (var j=0;j<myArray[i].length;j++)
//       myArray[i][j]=ctr++;
//}
//
//for (var i=0;i<myArray.length;i++){
//  var str=""
//   for (var j=0;j<myArray[i].length;j++){
//       str=str+myArray[i][j];
//}
//  console.log(str);
//}
////
////Q2
//
//var numArray=[];
//for(i=1;i<=10;i++){
//    numArray.push(i);
//    
//    table=19*i;
//    
//    console.log(table);
//
//}
//
////Q3
//var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
//
//for(i=0;i<arr.length;i++){
//    var ele=prompt("Enter your element");
//    if(arr[i]==ele){
//        console.log(ele + " Found!");
//        break;
//    }else{
//        console.log(ele + " Not Found!");
//        break;
//    }
//}
//
//////Q4
//var hc=Array();
//var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
//for(i=0;i<scores.length;i++){
//    if(scores[i]>=50&&scores[i]<100){
//       hc.push(i);
//        console.log("Half Century =  " + scores[i]);
//     }else if(scores[i]>=100&&scores[i]<200){
//        console.log("Century      =  "+ scores[i]);
//    }else if(scores[i]>=200){
//        console.log("Double Century=  "+ scores[i]);
//    }else{
//        console.log("Below Average =  "+ scores[i]);
//    }

//
////Q5
// 
//var x,y,z;
//x=-1;
//y=1;
//var array= Array(); 
//for(i=1;i<=15;i++){
//z=x+y;
//    array.push(z);
//x=y;
//y=z;
//
//
//}console.log(array.toString());


