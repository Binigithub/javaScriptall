//synchronous

//function first(){
//    console.log("one");
//}
//function second(){
//    console.log("second");
//}
//function third(){
//    console.log("third");
//}
//first();
//second();
//third();

//asynchronous
//function first(){
//    setTimeout(function(){
//    console.log("first");
//    },1000)
//}
//function second(){
//    setTimeout(function(){
//    console.log("second");
//    },3000)
//}
//function third(){
//    console.log("third");
//}
//first();
//second();
//third();

//callback

//function first(callback){
//    setTimeout(function(){
//    console.log("first");
//        callback(third);
//    },2000)
//}
//function second(callback){
//    
//    console.log("second");
//    callback();
//    
//}
//function third(){
//    console.log("third");
//}
//first(second);

//const async= function(n,callback){
//    const result=n+2;
//    callback(result);
//}
//async(2,function(result){
//    console.log(result);
//          async(4,function(result){
//          console.log(result);
//           async(6,function(result){
//            console.log(result);
//})
//})
//});

//function prepareTea(){    
//    setTimeout(function(){
//        console.log("1.Find Vessel");       
//        
//           setTimeout(function(){
//             console.log("2.Put water,sugar and tea");       
//               setTimeout(function(){
//                console.log("3.Bring the mixture to a boil");                
//                   setTimeout(function(){
//                    console.log("4.Filter the tea");                    
//                       setTimeout(function(){
//                       console.log("5.Serve the tea");
//
//                       },2000)               
//                   },2000)           
//               },2000)        
//           },2000)    
//    },2000)
//
//}prepareTea();

/////////////////////

//let promiseToCleanTheRoom=new Promise(function(resolve,reject){
//    let isClean=false;
//    if(isClean){
//        resolve("Clean");
//    }else{
//        reject("Not clean");
//    }
//});
//
//promiseToCleanTheRoom.then(function(fromresolve){
//    console.log("the room is " + fromresolve);
//}).catch(function(fromreject){
//    console.log("the room is "+ fromreject);
//})
//
//

//Dependencies

//let cleanRoom=function(){
//    return new Promise(function(resolve,reject){
//        resolve("The room is cleaned");
//    })
//}
//let removeTrush=function(msg){
//    return new Promise(function(resolve,reject){
//        resolve(msg + " Trush removed");
//    })
//}
//let winIcecream=function(msg){
//    return new Promise(function(resolve,reject){
//        resolve(msg + " Won icecream");
//    })
//}
//cleanRoom().then(function(result){
//    return removeTrush(result);
//}).then(function(result){
//    return winIcecream(result);
//}).then(function(result){
//    console.log("Finish "+ result);
//})
//
//then

//const async=()=>{
//    return new Promise((resolve,reject)=>{
//        resolve("Everything is good");
//    })
//};
//async()
//   .then((data)=>{
//    console.log(data);
//    return 1;
//})
//.then((data)=>{
//    console.log(data)
//   return 2;
//
//})
//.then((data)=>{
//    console.log(data);  
//      })

//catch

//const async=()=>{
//    return new Promise((resolve,reject)=>{
//        reject("Everything is good");
//    })
//};
//async()
//   .catch((data)=>{
//    console.log(data);
//    return 1;
//})
//.catch((data)=>{
//    console.log(data)
//   return 2;
//
//})
//.catch((data)=>{
//    console.log(data);  
//      })

//const async=(num)=>{
//    return new Promise((resolve,reject)=>{
//        if(num==4){
//            resolve("everything is good")
//        }else{
//        reject("Everything is good");
//        }
//    })
//};
//async(4)
//   .then((data)=>{
//    console.log(data);
//    return 1;
//})
//.then((data)=>{
//    console.log(data)
//   return 2;
//
//})
//.then((data)=>{
//    console.log(data);  
//})
//.catch((data)=>{
//    console.log(data);  
//      })

////////

//Async/Await

//function douAfter2Sec(x){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            resolve(x*2);
//        },2000)
//    })
//}
//
//
//function addPromise(x){
//    return new Promise(resolve=>{
//        douAfter2Sec(10).then((a)=>{
//            douAfter2Sec(20).then((b)=>{
//                douAfter2Sec(30).then((c)=>{
//                    resolve(x+a+b+c);
//                })
//            })
//        })
//    })
//}
//addPromise(10).then((sum)=>{
//    console.log(sum)
//})

//function douAfter2Sec(x){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            resolve(x*2);
//        },2000)
//    })
//}
//
//async function addAsync(x){
//    const a = await douAfter2Sec(10);
//    const b = await douAfter2Sec(20);
//    const c = await douAfter2Sec(30);
//    return x+a+b+c;
//
//}addAsync(10).then((sum)=>{
//    console.log(sum);
//})















