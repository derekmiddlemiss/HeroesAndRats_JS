function Hero( name, health, favFood ){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return "Hi I'm " +  this.name;
}






module.exports = Hero;