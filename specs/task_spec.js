var assert = require('assert');
var Task = require('../src/task.js');

describe( "Task", function(){

  var doLaundry;

  beforeEach( function(){
    doLaundry = new Task( 1, 1, "clean laundry" )
  });

  it( "should have a difficulty level", function(){
    assert.strictEqual( doLaundry.difficulty, 1);
  });

  it( "should have an urgency level", function(){
    assert.strictEqual( doLaundry.urgency, 1);
  });

})