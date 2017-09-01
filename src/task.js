Task = function( difficulty, urgency, reward, completed = false){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = completed;
}

Task.prototype.complete = function(){
  this.completed = true;
}

Task.prototype.incomplete = function(){
  this.completed = false;
}

module.exports = Task;