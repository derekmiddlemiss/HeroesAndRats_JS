var assert = require('assert');
var Hero = require('../src/hero.js');

describe( "Hero", function(){

  var hankTheRanger;

  beforeEach( function(){
    hankTheRanger = new Hero( "Hank The Ranger", 80, "Lasagna" );
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
  })

});
