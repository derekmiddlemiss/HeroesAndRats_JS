Rat = function(){

}

Rat.prototype.taintFood = function( food ){
  food.taint();
}

module.exports = Rat;