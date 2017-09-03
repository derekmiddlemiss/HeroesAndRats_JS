var assert = require('assert');
var Hero = require('../src/hero.js');
var Food = require('../src/food.js');
var Task = require('../src/task.js');

describe( "Hero", function(){

  var hankTheRanger;
  var doLaundry;
  var dustRoom;
  var nastyPie;
  var lasagna;

  beforeEach( function(){
    hankTheRanger = new Hero( "Hank The Ranger", 80, "Lasagna" );
    doLaundry = new Task( 1, 1, "clean laundry" );
    dustRoom = new Task( 2, 2, "dust free room" );
    nastyPie = new Food( "Foul Scotch Pie", 5 );
    lasagna = new Food( "Lasagna", 30 );
  });


  it( "should have a name", function(){
    assert.strictEqual( hankTheRanger.name, "Hank The Ranger");
  });

  it( "should have a health rating", function(){
    assert.strictEqual( hankTheRanger.health, 80);
  });

  it( "should have a favourite food", function(){
    assert.strictEqual( hankTheRanger.favFood, "Lasagna" );
  });

  it( "should be able to talk", function(){
    assert.strictEqual( hankTheRanger.talk(), "Hi I'm Hank The Ranger" );
  });

  it( "should have an empty task list on create", function(){
    assert.strictEqual( hankTheRanger.tasks.length, 0 );
  });

  it( "should be able to add a task", function(){
    hankTheRanger.addTask( doLaundry );
    assert.strictEqual( hankTheRanger.tasks.length, 1 );
  })

  it( "should be able to eat food for replenishment, not favourite", function(){
    hankTheRanger.eat( nastyPie );
    assert.strictEqual( hankTheRanger.health, 85 );
  });

  it( "should be able to eat food for replenishment, favourite", function(){
    hankTheRanger.eat( lasagna );
    assert.strictEqual( hankTheRanger.health, 125 );
  });

  it( "should be able to sort tasks by different criteria", function(){
    hankTheRanger.addTask( dustRoom );
    hankTheRanger.addTask( doLaundry );
    hankTheRanger.sortTasks( "reward" );
    assert.strictEqual( hankTheRanger.tasks[0], doLaundry);
    assert.strictEqual( hankTheRanger.tasks[1], dustRoom );
  });

  it( "should be able to view complete or incomplete tasks", function(){
    hankTheRanger.addTask( dustRoom );
    hankTheRanger.addTask( doLaundry );
    doLaundry.setComplete();
    var taskResults = hankTheRanger.viewTasks( "complete" );
    assert.strictEqual( taskResults[0], doLaundry );
    var taskResults = hankTheRanger.viewTasks( "incomplete" );
    assert.strictEqual( taskResults[0], dustRoom );
  });

});
