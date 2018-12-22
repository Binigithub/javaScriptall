////ASS22
//
//
var min=parseInt(prompt("Enter minimum mileage"));
var max=parseInt(prompt("Enter maximum mileage"));
var mileage=[];
for(var i=0;i<4;i++){
    mileage[i]=Math.floor(Math.random()*(max-min) + min);
    
}

var regular=parseFloat(prompt("Enter regular price"));
var premiem=parseFloat(prompt("Enter premium price"));
var supper=parseFloat(prompt("Enter super price"));
var gasPrice={
    regular:regular,
    premiem:premiem,
    supper:supper
    
};


function car(make,model,year,mileage,level,tank){
    this.make=make;
    this.model=model;
    this.year=year;
    this.mileage=mileage;
    this.level=level;
    this.tank=tank;


this.calcAverage=function(){
       var sum=0;
       for(var i=0;i<this.mileage.length;i++){

            sum=sum+this.mileage[i];

        }

        return sum / this.mileage.length;

    }

    this.calGas=function(){
        if(this.calcAverage()>0&&this.calcAverage()<=500){
            return this.tank*1.1;
        }else if(this.calcAverage()>500&&this.calcAverage()<=1000){
            return this.tank*1.2;
    }else if(this.calcAverage()>1000&&this.calcAverage()<=5000){
            return this.tank*1.3;
     }else if(this.calcAverage()>5000&&this.calcAverage()<=10000){
            return this.tank*1.4;
         
     }else{
         return this.tank*1.5;
     }
     }
         
this.gasPriceCal=function(){
    if(this.year==2018){
        return this.level.supper*this.calGas();
    }else if(this.year<2018&&this.year>=2010){
        return this.level.premiem*this.calGas();
    }else if(this.year<2010&&this.year>=2000){
        return this.level.regular*this.calGas();
    }
}
}
var car1=new car("Honda","Civic",2018,mileage,gasPrice,40);
var car2=new car("Honda","Civic",2010,mileage,gasPrice,30);
var car3=new car("Honda","Civic",2000,mileage,gasPrice,20);
var cost1=car1.gasPriceCal();
var cost2=car2.gasPriceCal();
var cost3=car3.gasPriceCal();
console.log(cost1);
console.log(cost2);
console.log(cost3);