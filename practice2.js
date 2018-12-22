////Q1
//
//var list=["Orange","Apple"];
//
//var item=prompt("Currently you have:"+ ["Orange "," Apple"]+" What do you want to add?");
//
//list.push(item);
//  alert(list); 
//
////Q2
//
//var list=["Orange","Apple"];
//item=prompt("Currently you have:" + list + " \nWhat do you want to remove");
//var removed=false;
//for(var i=0;i<list.length;i++){
//    if( list[i]==item){
//        list.splice(i,1);
//        removed=true;
//    }
//        
//    }
//if (removed==true){
//alert("Successfuly removed " + list);
//        //alert(list);
//}else{
//        alert(item +" Could not found");
//    }
//
////Q3
//
//var list=[" Orange "," Apple"," Cherry"];
//item=prompt("Currently you have: "+ list + "\nEnter what you want to change?");
//var removed=false;
//item1=prompt("What do you want to add?");
//for(i=0;i<list.length;i++){
//    if(list[i]==item){
//        list.splice(list[i],1,item1);
//        removed=true;
//        
//    }
//}
//if(removed==true){
//    alert("Successfuly changed " + list);
//}else{
//    alert(item +" Could not found");
//}
//
////Q4
//var list=["Orange "," Apple"," Cherry"];
//for(i=0;i<list.length;i++){
//    alert(("Alert"+ (i+1) + list[i]),(" Alert" + list[i]),(" Alert" + list[i]));
//   if(i==list.length-1){
//       break;
//   }
//} 
////Q5
//alert("Thank you!");
//

//function sum3(n1,n2,n3){
//    
//    
//    console.log(n1+n2+n3);
//}
//sum3(1,2,3);
//sum3(5,2,3,10);

function greatest(n1,n2,n3){
    if(n1>n2&&n1>n3){
        return n1;
    }else if(n2>n1&&n2>n3){
        return n2;
    }else if(n3>n1&&n3>n2){
        return n3;
    }else if(n1==n2&&n1==n3){
        return n1;
    }
    
}

console.log(greatest(3,4,5));
console.log(greatest(5,5,5));


