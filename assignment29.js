let cars=[
 {make:"Honda",model:"Civic",year:2009,mileage:10000,state:"CO"},
 {make:"Honda",model:"Accord",year:2010,mileage:88000,state:"VA"},
 {make:"Toyota",model:"RAV4",year:2016,mileage:20000,state:"va"},
 {make:"Nissan",model:"Altima",year:2015,mileage:50000,state:"CO"},
 {make:"Honda",model:"Civic",year:2018,mileage:15000,state:"VA"}
];

let state=function(cars,callback){
    for(let i=0;i<cars.length;i++){
        if(cars[i].state.toUpperCase()=="VA"){
            if(typeof callback=="function"){
                callback(cars[i]);
            }
        }
    }
}

state(cars,function(x){
    if(x.year>2010){
    console.log(`${x.make} ${x.mileage}`);
}
})

      
      