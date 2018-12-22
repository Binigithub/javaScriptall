//Q1
var myArray = Array(8);

//created inner array (columns)
for (var i=0; i<myArray.length; i++){
    myArray[i]= Array(8)
}
var ctr = 1
//assign value to your array
for (var i=0;i<myArray.length; i++){
    for (var j=0; j<myArray[i].length; j++){
        myArray[i][j]=ctr++;
        }
}
//printing
for (var i=0;i<myArray.length; i++){
    var str="";
    for (var j=0; j<myArray[i].length; j++){
        str=str+myArray[i][j];
        }
                           console.log(str);
}

//Q2
var myArray = Array(8);
for (var i=0; i<myArray.length; i++){
    myArray[i]= Array(8)
}

for (var i=0;i<myArray.length; i++){
    for (var j=0; j<myArray[i].length; j++){
        if((i+j)%2==0){
            myArray[i][j]="W ";
        }else{
            myArray[i][j]="B ";
        }
        }
}

for (var i=0;i<myArray.length; i++){
    var str="";
    for (var j=0; j<myArray[i].length; j++){
        str=str+myArray[i][j];
        }
        console.log(str);
}




//Q3

var array = [[90, 10, 231],[-20, 80, 100, 23, 54],
[45, 22],[87, 98, -100, 49, 73, 35, 19]];
    var max=array[0][0];
    for(i=0;i<array.length;i++){
       
        for(j=0;j<array[i].length;j++){
            if(array[i][j]>max){
                max=array[i][j];
            }

    }
    } console.log(max);
 










