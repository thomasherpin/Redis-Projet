var  _ = require('lodash');
//console.log(_.toPairs([1, 2, 3, 4]));
var entries = require('./reading.json');
//_.sortBy(_.toPairs(_.countBy(entries.map((e) => e.tags).join(' ').split(' '))), (v) => v[1])
sorti = _.sortBy(_.toPairs(_.countBy(entries.map((e) => e.tags).join(' ').split(' '))), (v) => v[1]);
//console.log(sorti);

//affiche tous les tags avec leurs chiffres sans les redis
/*sorti.forEach(function(element, i){
	var woreplace = [_.replace(element[0], "redis-" , "") , element[1]];
	console.log (woreplace);
});*/

//le plus intéressant pour le moment? sans les redis et sans les tags seul pour le menu:
var language = ["java", "pyton", "php", "c#", "c++"];
var lang;
// && _.filter(element[0], _.matches({language})) == element

sorti.forEach(function(element, i){
	if( _.isEqual(element[1] , 1) == false)
	{
		var woreplace = [_.replace(element[0], "redis-" , "") , element[1]];
		//console.log (woreplace);
		/*woreplace.forEach(function(element, i)
		{
			if (_.filter(element, _.matches({language})) == element && element == woreplace[0]) 
			{
				lang += woreplace[0];
				console.log(lang);
			}
		})*/
	}
	/*	if (_.isEqualWith(element[0], language) == true)
	{
		lang = element[0];
		console.log(lang);
	}
	*/
});

/*for (var data in sorti)
{
	//console.log(sorti[data][1]);
	if (_.isEqual(sorti[data][1], 1) == false)
	{
		console.log(sorti[data]);
	}
}
*/
/*
//affiche tous les tags apparaissant plus d'une fois, sans les tags redis et redis-nl-reading
sorti.forEach(function(element, i){
	if( _.isEqual(element[1] , 1) == false && _.isEqual(element[0] , "redis") == false && _.isEqual(element[0] , "redis-nl-reading") == false)
	{
		console.log (sorti[i]);
	}
});*/

//affiche tous les tags sauf redis et readis-nl-reading
/*sorti.forEach(function(element, i){
	if(_.isEqual(element[0] , "redis") == false && _.isEqual(element[0] , "redis-nl-reading") == false)
	{
		console.log (sorti[i]);
	}
});*/

//affiche tous les tags ne contenant pas le mot redis
/*sorti.forEach(function(element, i){
	if( _.includes(element[0] , "redis") == false)
	{
		console.log (sorti[i]);
	}
});*/