

var pokemonRepository= function() {
   var repository = [];
  }
]
return {

  add: function ( pokemon) {

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

  addListItem: function(pokemon){
    var $listItem = document.createElement('li');
    var $button = document.createElement('button');

    $button.classList.add('button');
    $button.innerText = pokemon.name;
    $button.addEventListener('click',function(event){
      pokemonRepository.showDetails(pokemon);
    }
  );
    // $button.addEventListener('click',function(){
    //    console.log(' il a cliqué sur    ' + pokemon.name );
    //
    // });


    $listItem.appendChild($button);
    $pokemonList.appendChild($listItem);
  },
  showDetails: function(pokemon) {
    console.log('Name:' + pokemon.name + 'Height: '+ pokemon.height + ' Types: ' + pokemon.type)
  },

};
}();

var $title =  document.querySelector('.title');
$title.addEventListener('click',function(){
console.log( " il a cliquéeee");

});


pokemonRepository.add({name:"Jakobo",
height:2,
types:['feces', 'stone'],
})


var theBigger = theBiggerOne(pokemonRepository.getAll());




/// SOMETHING ISN't working here
var $pokemonList = document.querySelector('.pokemon-list');


////
pokemonRepository.getAll().forEach (function(arrayItem) {
  var x= arrayItem;
 pokemonRepository.addListItem(x);





});







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
