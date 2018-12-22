//Re1

function arraystring(array){
if(array.indexOf(6)==0||array.lastIndexOf(6)==array.length-1){
        console.log("True");
    }else{
        console.log("False");
    }
}
arraystring([2,5,6]);
arraystring([2,5]);


//Re2
function arrayin(array){
   if ((array.length>1)&&(array[0]==array[array.length-1])){
    console.log("true");
     }else if((array.length>1)&&(array[0]!=array[array.length-1])){
    console.log("false");
}  else if (array.length<=1){
    console.log("not valid");
    
}
}
arrayin([1]);
arrayin([1,2,1]);
arrayin([1,2,3]);

////Re3

function arrayin(array1,array2){
    if(array1.length>1&&array2.length>1){
       if(array1[0]==array2[0]||array1[array1.length-1]==array2[array2.length-1]){ 
         console.log(true);
        }else {
        console.log(false);
        }
    }else{
        if(array1.length<=1){
        console.log("array1 is not valid");
        }else if(array2.length<=1){
        console.log("array2 is not valid");
    }
   }
  }
    arrayin([1,2],[1,2,3]);
    arrayin([2,2],[1,2,3]);
    arrayin([3,3],[1,2,3]);   
    arrayin([4],[1,2,3]);
    arrayin([1,2],[3]);
    
////    Re4
//
function sumOf(array){
    var sum=0;
    for(i=0;i<array.length;i++){
    sum=sum+array[i];
    
}console.log(sum);
}sumOf([2,3,5,6]);
sumOf([2,3,5,6,20]);

//Re5

function rotatedLeft(array){
    for(i=0;i<array.length;i++){
        x=array.slice(1,array.length);
    }console.log(x.concat(array[0]));
    
    
}rotatedLeft([1,2,3,4]);
rotatedLeft([1,2,3]);
rotatedLeft([1,2,3,4,6,7]);

//Re6

function maxEnd(array){
    var max=array[0];
    for(var i=1;i<array.length;i++){
        
       if(array[i]>max){ 
           max=array[i];
       }
        }
       for(var i=0;i<array.length;i++){
           array[i]=max;
       } 
    console.log(array);
    }
                 
maxEnd([2,4,6,8]);
maxEnd([10,5,6,8]);
maxEnd([2,20,6,8]);
maxEnd([2,4,11,8]);

//Re7

function myArray(array,array2){
    array2.push(array[0]);
    array2.push(array[array.length-1]);
 console.log(array2);
 
}

myArray([2,3,5],[]);
myArray([2,3,5,6,7],[]);
myArray([2,3,5,6,10],[]);
//

//Re8

function has23(array){
    var bool=false;
    for(i=0;i<array.length;i++){
        if(array[i]==2||array[i]==3){
            bool=true;
        }
        
    }
    console.log(bool);
}

has23([2,5]);
has23([4,3]); 
has23([4,5]); 
has23([2,5]);

//R9

function makeLast(array){
    
    var array1=Array(2*array.length);
     array1[array1.length-1]=array[array.length-1];
    for(i=0;i<array1.length-1;i++){
      
        array1[i]=0;       
     
      }
       console.log(array1);
}
makeLast([4,5,6]);
makeLast([1,2]);
makeLast([3]);




//R10

function double23(array){
    var ctr1=0;
    var ctr2=0;
    for(i=0;i<array.length;i++){
        if(array[i]==2){
            ctr1++;
        }else if(array[i]==3){
            ctr2++;
        }
    }
    if(ctr1==2||ctr2==2){
       console.log("True"); 
    }else{
        console.log("False");
    }
    
}

double23([1,2,3,4,5,]);
double23([1,2,2,4,5,]);
double23([1,2,3,2,3,2,]);