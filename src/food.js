Food = function( name, replenishment ){
  this.name = name;
  this.replenishment = replenishment;
}

Food.prototype.taint = function(){
  this.replenishment = -10;
}

module.exports = Food;