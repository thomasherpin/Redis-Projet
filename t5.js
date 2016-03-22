var _ = require('lodash');
var language = [
	{'language':'java'}, 
	{'language':'python'}, 
	{'language':'php'}, 
	{'language':'c#'}, 
	{'language':'c++'}];
var lang;
// && _.filter(element[0], _.matches({language})) == element

/*var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];*/
  var test = [
  	{ 'language':'try', 'rec':3 },
  	{ 'language':'python', 'rec':2 }
  ];
 
  //_.filter(users, _.matches({ 'age': 40, 'active': false }));
  
  // => [{ 'user': 'fred', 'age': 40, 'active': false }]
  language.forEach(function(element){ 
	console.log(_.filter(test, _.matches(element)));
  });
 //[]
//console.log(_.filter(test, _.matches({'nom':'python'}))); //['nom':'python', 'rec':2]