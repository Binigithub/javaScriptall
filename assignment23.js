//Ass23

let hours=[];
for(let i=0;i<4;i++){
    hours[i]=parseFloat(prompt(`Enter your hours for week ${i+1}`));
    
}

let wage=parseFloat(prompt(`Enter your wage`));

function employee(fName,lName,birthYear){
    this.fName=fName;
    this.lName=lName;
    this.birthYear=birthYear;
    this.age=function(){
         return new Date().getFullYear()-this.birthYear;
    }
    this.empId=function(birthYear){
        return this.fName.substr(0,1)+this.lName.substr(0,1)+this.age();
    }

}

function payroll(hours,insurance){
    this.hours=hours;
    this.insurance=insurance;
    this.totalHours=function(){
      let sum=0;
        for(let x of hours){
          sum=sum+x;
        }
            return sum;
    }


   this.earnings = function(){

        if (this.insurance==true&&this.overtime()>0){

        return this.totalHours()*wage+(wage*.5*this.overtime())+600

        }

        else if (this.insurance==true&&this.overtime()<=0){

            return this.totalHours()*wage+600

            

        } else if (this.insurance==false&&this.overtime()>0){

            return this.totalHours()*wage+(wage*.5*this.overtime())

           } else if (this.insurance==false&&this.overtime()<=0){

            return this.totalHours*wage

        }

    }
     
    payroll.prototype.overtime=function(){
         let overtime=0;
        for( let x of hours){
           
        if(x>40){
             overtime+=(x-40);
            
}
           
        }
        return overtime;
    }
}
       payroll.prototype=employee.prototype;

      let netPay = new payroll(hours,true); 

      let e1= new employee("Mike","Smith",1990);

       console.log(`Employee ID: ${e1.empId()}'s overtime hours for this month is: ${netPay.overtime()} and earning is $ ${netPay.earnings().toFixed(2)}`);
      



    
    
    


