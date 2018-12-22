var Car = function (make,year,model) {

    this.make = make;

    this.year = year;

    this.model = model;

    this.lightcontrol = function (lights) {

        if (lights == "ON") {

            lights = "OFF";

            

        }else {

            lights = "ON";

        }

        return lights;

    }

}



let myCar = new Car ("Honda", 2018, "Civic");



console.log (Car.prototype);

console.log(Car.prototype.__proto__ == myCar.__proto__.__proto__);



Car.prototype.getAnswer = function () {

    var getAns = prompt (`Would you like to update your navigation software? \n 1. Yes \n 2.No`); 

    if (getAns == 1) {

        Car.prototype.NavUpdate = function () {

            console.log ("Your GPS software is updated. Now you can avoid traffic");

        }

    } else {

        console.log ("Thank you");

    }

}

myCar.getAnswer ();





var SUV = function (make, year, model) {

    this.make = make;

    this.year = year;

    this.model = model;

    this.allRoad4x4 = true;

    this.lightcontrol = function (lights) {

        if (lights == "ON") {

            lights = "OFF";

            

        }else {

            lights = "ON";

        }

        return lights;

    }

}

let mySUV = new SUV ("Chevrolet", 2018, "Suburban");

mySUV.__proto__.__proto__ = Car.prototype;

