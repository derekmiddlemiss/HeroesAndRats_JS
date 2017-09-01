Task = function( difficulty, urgency, reward, completed = false){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = completed;
}

Task.prototype.setComplete = function(){
  this.completed = true;
}

Task.prototype.setIncomplete = function(){
  this.completed = false;
}

module.exports = Task;