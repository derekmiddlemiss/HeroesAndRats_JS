var assert = require('assert');
var Hero = require('../src/hero.js');

describe( "Hero", function(){

  var hankTheRanger;
  var nastyPie;
  var lasagna;

  beforeEach( function(){
    hankTheRanger = new Hero( "Hank The Ranger", 80, "Lasagna" );
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

  it( "should be able to eat food for replenishment, not favourite", function(){
    hankTheRanger.eat( nastyPie );
    assert.strictEqual( hankTheRanger.health, 85 );
  });

  it( "should be able to eat food for replenishment, favourite", function(){
    hankTheRanger.eat( lasagna );
    assert.strictEqual( hankTheRanger.health, 125 );
  });


});
