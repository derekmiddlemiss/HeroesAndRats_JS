var assert = require('assert');
var Food = require('../src/food.js');

describe( "Food", function(){

  var nastyPie;

  beforeEach( function(){
    nastyPie = new Food( "Foul Scotch Pie", 5 )
  })

  it( "should have a name", function(){
    assert.strictEqual( nastyPie.name, "Foul Scotch Pie" );
  });

  it( "should have a replenishment value", function(){
    assert.strictEqual( nastyPie.replenishment, 5 );
  })

});