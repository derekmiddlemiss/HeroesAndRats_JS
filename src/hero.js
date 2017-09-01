function Hero( name, health, favFood, tasks = [] ){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = tasks;
}

Hero.prototype.talk = function(){
  return "Hi I'm " +  this.name;
}

Hero.prototype.eat = function( food ){
  if ( food.name === this.favFood ){
    this.health += food.replenishment * 1.5;
  } else {
    this.health += food.replenishment;
  }
}




module.exports = Hero;