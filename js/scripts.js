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

var pos = theBiggerOne();





document.write('<div class="grid">');
for (var i=0; i<repository.length; i++){


  if ( i=== pos){
    document.write(
      '<div class="grid__item flex_grid">  <h3 class=" flex_item">'
        + repository[i].name
        + '</h3 ><ul class=" flex_item">  <li > Height: '
        + repository[i].height
    + 'm </li> <li>'
    +repository[i].types
    + '</li></ul>'
    + '<div  class=" flex_item"> That\'s the bigger one!'
    +' </div></div>');
  }
  else {
    document.write(
      '<div class="grid__item flex_grid">  <h3 class=" flex_item">'
    + repository[i].name
    + '</h3 ><ul class=" flex_item"> <li > Height: '
    + repository[i].height
    + 'm </li> <li>'
    +repository[i].types
    + '</li></ul>'
    + '<div  class=" flex_item"> That\'s not the bigger one '
    +'</div></div>');

  }



}

document.write('</div>');




function theBiggerOne () {
  var theHighest= 0;
  var pos;
   for ( var j=0; j<repository.length; j++) {

       if (theHighest <repository[j].height) {
        theHighest= repository[j].height;
        pos=j;
       }
      repository[j].height
  }
  return pos;
}
