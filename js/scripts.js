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

var pos = theBiggerOne();

for (var i=0; i<repository.length; i++){

  document.write('<br>' + repository[i].name + ' - Height: '+ repository[i].height+ 'm');
  if ( i=== pos){
  document.write(' That\'s the bigger one!');

  document.write('<br>' + '<br>')
  }

}
