//var obj ={
//
//    num:2
//
//}
//
//
//
//var obj2 ={
//
//    num:10
//
//}
//
//
//
//var addToThis =function (a){
//
//    return this.num +a;
//
//}
//
//
//
//var y =addToThis.call(obj2,3);
//
//console.log(y);



//var obj3 ={
//
//    num:10
//
//}
//
//
//
//var addToThis2 =function (a,b,c){
//
//    return this.num +a+b+c;
//
//}
//
//
//
//var z= addToThis2.call(obj3,1,2,3); //functionName.call(objectName,functionArguments)
//
//console.log(z)
//
////
//
//
//
////apply
//
//var obj4 ={
//
//    num:10
//
//}
//
//var addToThis2=function(a,b,c){
//    return this.num +a+b+c;
//}
//
//var arr =[4,2,3];
//
//var x=addToThis2.apply(obj4,[...arr]);
//
//console.log(x);


//
//
//
//
//
////bind
//
//var obj5={
//
//    num:5
//
//}
//
//var addToThis3 =function (a,b,c){
//
//    return this.num +a+b+c;
//
//}
//
//var arr2 =[5,2,3];
//
//var k =addToThis3.bind(obj5)
//
//console.log(k(...arr2))
//
