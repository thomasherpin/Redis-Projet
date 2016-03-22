const $ = require('jquery');
const angular = require('angular');

const ReactDOM = require('react-dom');
const React = require('react');

const Link = require('./components/LinkComponentRedis.jsx');

console.log(document.getElementById('appcontainer'));
ReactDOM.render(<Link url='http://' title='Hey' description='plop' />,
document.getElementById('appcontainer'));

$.get('/api/links').then(function(links) {
  console.log(links);
});

const jsonContent = JSON.parse($.readFileSync("reading.json"));
console.log("Test1: ", reading.tags)

//$.getJSON('reading.json').then(function(tags){
//	console.log(tags);
//});

//$.getJSON('reading.json').then(function(data){
//	console.log(data);
//});