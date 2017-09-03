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

Hero.prototype.addTask = function( task ){
  this.tasks.push( task );
}

Hero.prototype.sortTasks = function( criterion ){
  // not very SOLID, but couldn't see a way to get a list of fields of the Task prototype
  // Java - would set up a static method on Task class returning array of allowed fields. 
  // Not sure if there is a JS equivalent?
  var allowedCriteria = [ "difficulty", "urgency", "reward" ];
  
  if ( !allowedCriteria.includes( criterion ) ) {
    throw "sortTasks: unknown Task property used as criterion";
  }
  
  this.tasks.sort( function(taskA,taskB){
    var fieldA = taskA[ criterion ];
    var fieldB = taskB[ criterion ];

    if ( fieldA < fieldB ) {
      return -1;
    } else if ( fieldA > fieldB ) {
      return 1;
    } else {
      return 0;
    }

  })
  
}

Hero.prototype.viewTasks = function( criterion ){
  var allowedCriteria = [ "complete", "incomplete" ];
  
  if ( !allowedCriteria.includes( criterion ) ) {
    throw "viewTasks: only 'complete' and 'incomplete' allowed as criteria";
  }
  
  if ( criterion === "complete" ) {
    var state = true;
  } else {
    var state = false;
  }

  return this.tasks.filter( function(task){
    return( task.completed === state );
  })

}



module.exports = Hero;