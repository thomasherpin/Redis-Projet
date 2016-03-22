
//const fs = require('fs');
//const jsonContent = JSON.parse(fs.readFileSync("tt.json"));
//console.log("Test1: ", jsonContent.tags);
//fonctionne sur le test

//const fs = require('fs');
//const jsonContent = JSON.parse(fs.readFileSync("reading.json"));
//console.log("tags: ", jsonContent.tags);
//tags: undefined

const fs = require('fs');
const jsonContent = JSON.parse(fs.readFileSync("reading.json"));
//jsonContent.map((e) => e.tags)
//jsonContent.map()((e) => e.tags).join(' ').split(' ');
//jsonContent.map()((e) => e.tags).join(' ').split(' '));
//jsonContent.foreach(jsonContent[data].foreach(
//	if(info == "tags")
//		{
//			console.log("tags: " + jsonContent[data][info].replace("redis",""));
//		}));

var countredisnlreading = 0;

for (var data in jsonContent)
{
	//console.log("N°lien: " + data);
	//affiche les chiffres de chaque objet {}
	//console.log("Objet: " + jsonContent[data]);
	//affiche chaque objet [object Object]
	for (var info in jsonContent[data])
	{
		//console.log(jsonContent[data][info]);
		if(info == "tags")
		{
			//console.log(info + ": " + info["tags"]);
			if (jsonContent[data][info].search("redis-nl-reading"))
			{
				countredisnlreading += 1;
			}

			console.log("tags: " + jsonContent[data][info].replace("redis ","").replace("redis-nl-reading ","").split(' '));
			//.replace("redis ","")

		}
	}

}


console.log("reading-nl-reading(" + countredisnlreading+")");
var entries = jsonContent.map((e) => e.tags).join(' ').split(' ');
console.log(entries);
//console.log("reading-nl-reading(" + countredisnlreading+")");
//console.log("reading-nl-reading(" + countredisnlreading+")");
//console.log("reading-nl-reading(" + countredisnlreading+")");

//var exjson = {
//    "href": "http://antirez.com/news/60",
//    "description": "Twilio incident and Redis /by @antirez",
//    "extended": "",
//    "meta": "58518cf11f6f39f338a6219de799cad1",
//    "hash": "74bead6c4484da8246fcdd87e755cf0f",
//    "time": "2013-07-25T08:26:57Z",
//    "shared": "no",
//    "toread": "no",
//    "tags": "redis redis-incident redis-nl-reading"
//  };
//for(var exKey in exjson) {
//      console.log("key:"+exKey+", value:"+exjson[exKey]);
// }
