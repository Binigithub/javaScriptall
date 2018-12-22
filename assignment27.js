//ass27

class City{
    constructor(name){
        this.name=name;
        
    }
}

class park extends City{
    constructor (name,area,nTrees){
      super(name);
        this.area=area;
        this.nTrees=nTrees;
    }
    
}


class street extends City{
    constructor(name,size){
        super(name);
        this.size=size;
    }
    classStreet() {
		let classify = new Map();
		classify.set(1, "tiny");
		classify.set(2, "small");
		classify.set(3, "normal");
		classify.set(4, "big");
		classify.set(5, "huge");
		console.log('${this.name} is a ${classify.get(this.size)} street.');
	}
}
function treeDensity(T){
        let density=this.nTrees/this.area;
       console.log(`${this.name} has a tree density of ${density} trees.`);
    T.forEach (z => z.treeDensity);
    }
   

function trees(x){
    let y=nTrees.map(x=>x>=1000);
	console.log('${x.name} has more than 1000 trees.');
    
}

let threeParks = [new park("Foster Park", 2, 1500), 
                  new park("Montros Park", 3, 2000), 
                  new park("North Park", 4, 649)];

let fourStreets = [new street("1st Ave",1, 4),             
                   new street("2nd Ave", 2.7, 2),
                   new street("3rd Ave", 1.5,3), 
                   new street("4th Ave", 2.5, 5)];

treeDensity(threeParks);
trees(fourStreets);













//class Element {
//	constructor (name, buildYear) {
//		this.name = name;
//		this.buildYear = buildYear;
//	}
//}
//
//class Park extends Element {
//	constructor(name, buildYear, area, numTrees) {
//		super(name, buildYear);
//		this.area = area; //km2
//		this.numTrees = numTrees;
//	}
//
//	treeDensity() {
//		const density = this.numTrees / this.area;
//		console.log('${this.name} has a tree density of ${density} trees per square km.');
//	}
//}
//
//class Street extends Element {
//	constructor(name, buildYear, length, size) {
//		super(name, buildYear);
//		this.length = length;
//		this.size = size;
//	}
//
//	classifyStreet() {
//		const classification = new Map();
//		classification.set(1, 'tiny');
//		classification.set(2, 'small');
//		classification.set(3, 'normal');
//		classification.set(4, 'big');
//		classification.set(5, 'huge');
//		console.log('${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.');
//	}
//}
//
//const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];
//
//const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergree Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];
//
//function calc(arr) {
//	const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
//	return [sum, sum / arr.length];
//}
//
//
//function reportParks(p) {
//	console.log(----PARKS REPORTS----);
//	// Density
//	p.forEach (el -> el.treeDensity());
//
//	// Average age
//	const ages = p.map(el => new Date().getFullYear() - el.buildYear);
//	const [totalAge, avgAge] = calc(ages);
//	console.log('Our ${p.length} parks have an average of ${avgAge} years.');
//
//	// Which park has more than 1000 trees;
//	const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
//	console.log('${p[i].name} has more than 1000 trees.');
//}
//
//function reportStreets(s) {
//	console.log(---- STREETS REPORT ----);
//
//	//Total and average length of the town's streets
//	const [totalLength, avgLength] = calc(s.map(el => el.length));
//	console.log('Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.');
//
//	//Classify sizes
//	s.forEach(el => el.classifyStreet());
//}
//
//reportParks(allParks);
//reportStreets(allStreets);