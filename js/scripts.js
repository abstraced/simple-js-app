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
var test = document.write('this is a test');




for (var i=0; i<repository.length; i++){

  document.write('<br>' + repository[i].name + ' - Height: '+ repository[i].height+ 'm' +  '<br>');



};
