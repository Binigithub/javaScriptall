//15
//Q1

function fix23(array){
    for(i=0;i<array.length;i++){
        if(array[i]==2&&array[i+1]==3){
            array[i+1]=0;
        }
    }
    console.log(array);
}
fix23([1,2,3,4,2,3]);
fix23([1,2,3,]);
fix23([2,0,5]);
fix23([1,2,1]);
fix23([11,2,13,3,2]);

//Q2

function start1(array,array1){
    var ctr=0;
    if(array[0]==1&&array1[0]==1){
        console.log(2);
    }else if((array[0]==1&&array1[0]!=1)||(array[0]!=1&&array1[0]==1)){
      console.log(1);        

    }else{
        console.log(0); 
    }
}
//Q2 or
function start1(array,array1){
    var counter=0;
    if(array[0]==1){
        counter++;
    }
    if(array1[0]==1){
        counter++;
    }console.log(counter);
} 
start1([1,2,3],[1,3]);
start1([7,2,3],[1]);
start1([1,2],[]);
start1([3,2,4],[4,3]);

//Q3

function btwo(array1,array2){
    var sum1=0,sum2=0;
    for(i=0;i<array1.length;i++){
       sum1=sum1+array1[i]; 
}
     for(j=0;j<array2.length;j++){
        sum2=sum2+array2[j];    
     }
    if(sum1>sum2){
        console.log(array1);
    }else if(sum1<sum2) { 
        console.log(array2);
    }else if(sum1==sum2) {
        console.log("equal");
    }
}
btwo([1,2,3],[3,4]);
btwo([5,6],[3,8]);            
btwo([1,1],[1,0]);

//Q4

function plusTwo(array1,array2){
    var array3=[];
    for(i=0;i<array1.length;i++){
        array3.push(array1[i]);
    }
    for(j=0;j<array2.length;j++){
        array3=array3.concat(array2[j]);
    }console.log(array3);
}
plusTwo([1,2],[3,4]);
plusTwo([4,4],[2,2]);
plusTwo([9,2],[3,4]);

//Q5

function swapEnds(array){
    var temp=[];
    for(i=0;i<array.length-1;i++){
        temp=array[0];
        array[0]=array[array.length-1];
        array[array.length-1]=temp;
        
    }console.log(array);
}

swapEnds([1,2,3,4]);
swapEnds([1,2,3]);
swapEnds([8,6,7,9,5]);

//Q6

function countEvens(array){
    counter=0;
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            counter++;
        }
    }console.log(counter);
}
countEvens([1,2,3,4]);
countEvens([2,2,0]);
countEvens([1,3,5]);
countEvens([2,1,7,3,4]);

//Q7

//function bigDiff(array){
//    var Max=array[0]; var Min=array[0];
//    for(i=1;i<array.length;i++){
//    if(Max<array[i]){
//        Max=array[i];
//    }
//        for(j=1;j<array.length;j++){
//            if(Min>array[j]){
//                Min=array[j]; 
//            }
//        }
//}console.log(Max-Min);
//    }
//bigDiff([10,3,5,6]);
//bigDiff([7,2,9,10]);
//bigDiff([2,10,7,9]);
//
////Q8
//
//function sum13(array){
//    var sum=0;
//    for(i=0;i<array.length;i++){
//        if(array[i]==13){
//            break;
//        }
//        sum+=array[i];
//        
//    }console.log(sum);
//}
//sum13([1,2,2,1]);
//sum13([1,1,2,2,1,13]);
//sum13([1,2,2,1,13,2]);
//sum13([1,13,2,1]);
//
////Q9
//
//function sum67(array){
//    var sum=0;
//    var result;
//    for(i=0;i<array.length;i++){
//        sum=sum+array[i];
//        }
//    var num= array.slice(array.indexOf(6), array.indexOf(7)+1)
//    var gum=0
//    for (j=0; j<num.length; j++){
//        gum=gum+num[j]
//    }
//    result=sum-gum
//    console.log(result)
//    }
//
//    sum67([1,2,2]);
//    sum67([1,2,2,6,99,99,7]);
//    sum67([1,1,6,7,2]);
//    sum67([1,1,6,2,7]);
//    sum67([1,2,2,6,99,99,7,3,4]);
//
//
////Q10
//
//function has22(array){
//for (var i=0; i<array.length; i++){
//    if ((array[i]==2)&&(array[i+1]==2)){
//        console.log ("true")
//        break;
//   }
//} 
//if ((array[i]!=2)&&(array[i+1]!=2)){
//    console.log("false")
//}
//} 
//has22([1, 2, 2]);
//has22([1, 2, 1, 2]);
//has22([2, 1, 2]);
//has22([2,2, 1, 2]);