////Re16
////Q1
//
//function sum28(array){
//      sum=0;
//    for(i=0;i<array.length;i++){
//      
//      if(array[i]==2){
//          sum+=2;
//      }
//    }
//        if(sum==8){
//            console.log("True");
//            
//        }else{
//            console.log("False");
//            
//        
//    }
//}
//sum28([2,3,2,2,4,2]);
//sum28([2,3,2,2,4,2,2]);
//sum28([1,2,3,4]);
//
////Q2
//function more14(array){
//    var counter1=0;
//    var counter2=0;
//    for(i=0;i<array.length;i++){
//       if(array[i]==1){
//           counter1++;
//       } 
//        if(array[i]==4){
//            counter2++;
//        }}
//    if(counter1>counter2){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}
//more14([1,4,1]);
//more14([1,4,1,4]);
//more14([1,1]);
//more14([1,4,1,4,4]);
//more14([4,2]);
//
////Q3
//
//function fizzArray(num){
//    var myArray=Array(num);
//    for(i=0;i<myArray.length;i++){
//        myArray[i]=i;           
//        }console.log(myArray);
//
//    }
//fizzArray(4);
//fizzArray(1);
//fizzArray(10);
//
////Q4
//function isEveryWhere(array,num){
//    for(i=0;i<array.length;i++){
//        if(array[i]==num&&array[i+1]==num||array[i+2]==num){
//            console.log("True");
//            break;
//        }else{
//            console.log("False");
//            break;
//        }
//    }
//}
//isEveryWhere([1,2,1,3],1);
//isEveryWhere([1,2,1,3],2);
//isEveryWhere([1,2,1,3,4],1);
//isEveryWhere([1,2,4,3,1],1);
//
////Q5
//
//function muchUp(array1,array2){
//    counter=0;
//    //array1.length=array2.length;
//    for(i=0;i<array1.length;i++){
//        if(array2[i]-array1[i]<=2&&array2[i]!=array1[i]){
//            counter++;
//            }
//        
//    }console.log(counter);
//}
//
//muchUp([1,2,3,4,6],[2,3,10,5,8]);
//muchUp([1,2,3],[2,3,5]);
//muchUp([1,2,3],[2,3,3]);
//
////Q6
//
//
//function modThree(array){
//  var counter=0;
//  var result;
//  for(var i=0;i<array.length;i++){
//    if(array[i]%2==0 && array[i+1]%2==0 && array[i+2]%2==0){
//      counter++;
//    }else if(array[i]%2==1 && array[i+1]%2==1 && array[i+2]%2==1){
//      counter++;
//    }
//  }if(counter>0){
//    result=true;
//  }else{
//    result=false;
//  }
//  console.log(result);
//}
//modThree ([2, 1, 3, 5]);
//modThree([2, 1, 2, 5]);
//modThree([2, 4, 2, 5]); 
//modThree([2, 4, 5]);
//
//
////Q7 not
//
//function tripleUp(array){
//    
//    var number=array.includes();
//    var result;
//    var counter=0;
//    
//    for(var i=0;i<array.length;i++){
//        var  number=array[i]; 
//        if(array[i+1]==number+1 && array[i+2]==number+2){
//        
//            counter++;
//        }
//            
//    }if(counter>0){
//           result=true;
//        }else {
//            result=false;
//        }
//    console.log(result);
//}
//  
//  
//
//tripleUp([1,4,5,6,2]); 
//tripleUp([1,2,3]); 
//tripleUp([1,2,4]); 
//tripleUp([1,2,4,5,8,9]); 
//
//
//
////Q8 not
//function fizzArray(start,end){
//    
//    var array=[];
//    
//    
//    for( var i=start;i<end;i++){
//        array.push(i);
//        
//    }
//        console.log(array);
//    }
//    
//
//fizzArray(5,10);
//fizzArray(11,18);
//fizzArray(1,3);
//
////Q9
//function tenRun(array){
//    for(i=0;i<array.length;i++){
//        if(array[i]%10==0){
//            for(j=i+1;j<array.length&&(array[j])%10!=0;j++){
//                array[j]=array[i];
//                
//            }
//        }
//    }console.log(array);
//}
//
//tenRun([2,10,3,4,20,5]);
//tenRun([10,1,20,2]);
//tenRun([10,1,9,20]);
//
////Q10
//
//function notAlone(array,num){
//    
//    for( var i=0;i<array.length;i++){
//        if(array.includes(num)){
//            
//            if(array[i-1]>array[i+1]){
//                array[i]=array[i-1];
//            }else if(array[i-1]<array[i+1]){
//                array[i]=array[i+1];
//            }
//                
//            
//        }
//    }
//    console.log(array);
//}
//notAlone([1,2,3],2);
//notAlone([1,2,3,2,5,2],2);
//notAlone([3,4],3);
//
//
//


