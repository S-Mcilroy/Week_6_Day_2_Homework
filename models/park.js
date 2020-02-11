const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur) {
  this.collectionOfDinosaurs.splice(this.collectionOfDinosaurs.indexOf(dinosaur), 1 );
};

Park.prototype.mostVisitors = function() {
  let largest = 0
  for (const dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.guestsAttractedPerDay >= largest || dinosaur.guestsAttractedPerDay >= largest.guestsAttractedPerDay){
      largest = dinosaur
    }
  }
  return largest
};

Park.prototype.allSpecies = function(species) {
  array = []
  for (dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.species === species){
      array.push(dinosaur)
    }
  }
  return array;
};

Park.prototype.totalVistors = function() {
  total = 0
  for (dinosaur of this.collectionOfDinosaurs){
    total += dinosaur.guestsAttractedPerDay
  }
return total;
};

Park.prototype.totalVistorsPerYear = function () {
  return this.totalVistors() * 365;
};

Park.prototype.totalRevenue = function () {
  return this.totalVistorsPerYear() * this.ticketPrice
};

Park.prototype.removeAllSpecies = function (species) {
     this.collectionOfDinosaurs = this.collectionOfDinosaurs.filter(function(dinosaur){
         return dinosaur.species != species;
     });
  };

Park.prototype.allDietTypes = function() {
  let counts = {};
  this.collectionOfDinosaurs.map(function(dinosaur) { counts[dinosaur.diet] = (counts[dinosaur.diet] || 0)+1; });
  return counts;
};

module.exports = Park;
