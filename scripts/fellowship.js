console.log("LINKED");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
// Our Setting
var lands = ['The Shire', 'Rivendell', 'Mordor'];
// Starter code for the body
var body = document.querySelector('body');


function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
    let middleEarth = document.createElement("section");
    middleEarth.IdName = 'middle-earth';
    // add each land as an article tag (add them one by one in a loop)
    for (var i = 0; i <= lands.length - 1;  i++) {
    	let newArt = document.createElement('article');
    	// inside each article tag include an h1 with the name of the land
    	middleEarth.appendChild(newArt);
    	let hOne = document.createElement('h1');
    	newArt.appendChild(hOne);
    	// each article should also have a class equal to it's name ('The Shire' element should have a class of 'The Shire')
    	newArt.className = lands[i]; newArt.appendChild(hOne);
      let txt = document.createTextNode(lands[i]);
      hOne.appendChild(txt);
    }
    // append middle-earth to your document body
    document.body.append(middleEarth);
}
makeMiddleEarth();

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    // give each hobbit a class of hobbit
  let hobbiton = document.getElementsByClassName('The Shire');
  let hobbitsis = document.createElement('ul');
  hobbiton[0].appendChild(hobbitsis);
  for (var i = 0; i <= hobbits.length - 1; i++) {
  	let list = document.createElement('li');
  	hobbitsis.appendChild(list);
  	list.className = 'hobbit';
  	let txt = document.createTextNode(hobbits[i]);
  	list.appendChild(txt);
  }
}
makeHobbits();


