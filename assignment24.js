function Game(){
    this.level=0;
}
function Robot(name,year,owner){
    this.name=name;
    this.year=year;
    this.owner=owner;
}
 Game.prototype.play=function(level){
    console.log(`Welcome to level ${level}`);
    this.unlock(level);
    level++;
    return level;
}

 Game.prototype.unlock=function(level){
    if(level==10){
        Game.prototype.deployLaser=function(){
            console.log(`${this.name} is blasting you with laser beams`)
        }
    }
}
let game=new Game();
let robot1=new Robot("Robby",2018,"Terminator");
let robot2=new Robot("Rosie",2018,"Cyborg");

robot1.__proto__.__proto__=Game.prototype;
let level=game.level;
do{
    level=game.play(level);
}while(level<=10);
robot1.deployLaser();
robot2.deployLaser();