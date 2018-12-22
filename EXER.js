//var a=[1,4,6,6,8,7,8,8,9,1,0];
//var count=0;
//for(var i=0;i<a.length;i++){
//	for(var j=1;j<a.length;j++){
//		if(a[i]!=a[j]){
//			console.log(a[j]);
//			
//			}else{
//				continue;
//			}
//		
//	}
//	
//	
//}

var num = Math.ceil(Math.random()*9+1)
var count=1
do {
  var color1 = prompt(`What is Mike Smith's favorite color? You have ${num-1} tries. \n This is your try Number. ${count}`);

   switch (color1) {
   case "blue":
   alert("That is correct");
     count=num;
       break;
       default:
alert("Sorry, not " + color1);
count++
 break;
}

}while (count<num)