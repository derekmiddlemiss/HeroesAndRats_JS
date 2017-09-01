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

  it( "should have a reward", function(){
    assert.strictEqual( doLaundry.reward, "clean laundry" );
  });

  it( "should be incomplete by default on create", function(){
    assert.strictEqual( doLaundry.completed, false );
  })

  it( "should be completable", function(){
    doLaundry.complete();
    assert.strictEqual( doLaundry.completed, true );
  })

})