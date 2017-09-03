var assert = require('assert');
var Rat = require('../src/rat.js');

describe( "Rat", function(){

  var nibbles;
  var nastyPie;

  beforeEach( function(){
    nibbles = new Rat();
    nastyPie = new Food( "Foul Scotch Pie", 5 );
  })

  it( "can taint food", function(){
    nibbles.taintFood( nastyPie );
    assert.strictEqual( nastyPie.replenishment, -10 );
  })

});