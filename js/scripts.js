var pokemonRepository= function() {
   var repository = [
  {name:"Bulbasaur",
  height:0.7,
  types:['grass', 'poison'],
  },
  {name:"Pikachu",
  height:0.4,
  types:['electric']
  },
  {name:"Machop",
  height:0.8,
  types:['fighting']
  },
  {name:"Lileep",
  height:1,
  types:['grass','rock']
  }
]
return {

  add: function ( pokemon) {

    var newPokemon = Object.keys(pokemon);
    var repo = Object.keys(repository[0]);


     if ( typeof pokemon === 'object' )  {
     // if ( typeof pokemon === 'object'  && newPokemon === repo ) {  //
      repository.push(pokemon);

      console.log('pokemon added!');}
  else {
    console.log( ' not an object');
    console.log(Object.keys(pokemon));
    console.log(Object.keys(repository[0]));
    console.log (typeof pokemon);
  }
  },
  getAll: function() {
    return repository;
  },
};
}();




pokemonRepository.add({name:"Jakobo",
height:2,
types:['feces', 'stone'],
})


var theBigger = theBiggerOne(pokemonRepository.getAll());


document.write('<div class="grid">');

pokemonRepository.getAll().forEach (function(arrayItem) {
  var x= arrayItem;
  if ( x.name=== theBigger){
    document.write(
      '<div class="grid__item flex_grid">  <h3 class=" flex_item name">'
        + x.name
        + '</h3 ><ul class=" flex_item">  <li > Height: '
        + x.height
    + 'm </li> <li>'
    +x.types
    + '</li></ul>'
    + '<div  class=" flex_item"> That\'s the bigger one!'
    +' </div></div>');
  }
  else {
    document.write(
      '<div class="grid__item flex_grid">  <h3 class=" flex_item name">'
    + x.name
    + '</h3 ><ul class=" flex_item"> <li > Height: '
    + x.height
    + 'm </li> <li>'
    + x.types
    + '</li></ul>'
    + '<div  class=" flex_item"> That\'s not the bigger one '
    +'</div></div>');

  }
});




document.write('</div>');




function theBiggerOne (repositoryArray) {
  var theHighest= 0;
  var name;

  repositoryArray.forEach(function(arrayItem){
    var x= arrayItem;
    if (theHighest <x.height) {
     theHighest= x.height;
     name =x.name;
    }
  });
  return name;
}
