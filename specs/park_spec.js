const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Jurassic Park", 10);
    dino1 = new Dinosaur("Raptor", "Meat", 10)
    dino2 = new Dinosaur("T-Rex", "Meat", 50)
    dino3 = new Dinosaur("Triceratops", "Plant", 100)
    dino4 = new Dinosaur("Triceratops", "Plant", 50)
  })

  it('should have a name', function() {
    const actual = park.name;
    const expected = "Jurassic Park";
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    const expected = 10;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dino1);
    const actual = park.collectionOfDinosaurs.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.removeDinosaur(dino1);
    const actual = park.collectionOfDinosaurs.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino3);
    park.addDinosaur(dino2);
    const actual = park.mostVisitors();
    const expected = dino3;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino3);
    park.addDinosaur(dino2);
    park.addDinosaur(dino4);
    const actual = park.allSpecies("Triceratops")
    const expected = [dino3, dino4]
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino3);
    park.addDinosaur(dino2);
    park.addDinosaur(dino4);
    const actual = park.totalVistors();
    const expected = 210;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino3);
    park.addDinosaur(dino2);
    park.addDinosaur(dino4);
    const actual = park.totalVistorsPerYear();
    const expected = 76650;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino3);
    park.addDinosaur(dino2);
    park.addDinosaur(dino4);
    const actual = park.totalRevenue();
    const expected = 766500;
    assert.strictEqual(actual, expected);
  });

});
