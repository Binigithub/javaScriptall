

//var arrayLength=3;
//var multiArray=Array(arrayLength);
//multiArray[0]=Array(arrayLength);
//multiArray[1]=Array(arrayLength);
//multiArray[2]=Array(arrayLength);
//for(i=0;i<multiArray.length;i++){
//    multiArray[i]=Array(arrayLength);
//            
//}
//multiArray[0][0]="apple";
//multiArray[0][1]="banana";
//multiArray[0][2]="cherry";
//multiArray[1][0]=10;
//multiArray[1][1]=20;
//multiArray[1][2]=30;
//multiArray[2][0]=["job" , "salary"];
//multiArray[2][1]=["work","good"];
//multiArray[2][2]=["home","far"];
////console.log(multiArray[2]);
//console.log(multiArray[2][0][0]);

//
var multiArray=[
    ["apple","banana","cherry"],
    [10,20,30],
    [["job","salary"],["work","good"],["home","far"]]
];
for(var i=0;i<multiArray.length;i++){
    
    for(var j=0;j<multiArray[i].length;j++)
console.log(multiArray[i][j]);   
}//console.log(i + j);