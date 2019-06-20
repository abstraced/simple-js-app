var repository= [
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

var theBigger = theBiggerOne(repository);





document.write('<div class="grid">');

repository.forEach (function(arrayItem) {
  var x= arrayItem;
  if ( x.name=== theBigger){
    document.write(
      '<div class="grid__item flex_grid">  <h3 class=" flex_item">'
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
      '<div class="grid__item flex_grid">  <h3 class=" flex_item">'
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
