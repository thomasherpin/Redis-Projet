const _ = require('lodash');
const entries = require('./reading.json');

//const data = _.sortBy(_.toPairs(_.countBy(entries.map((e) => e.tags).join(' ').split(' '))), (v) => v[1]);
const tags = _.chain(entries).map((e) => e.tags).join(' ').split(' ').countBy().toPairs().sortBy((v) => v[1]).value();
// console.log(tags);
// console.log(filterMultiple(tags, ['rate', 'limiting']));

function filterMultiple(tags, searches){
  return tags.filter(function(tag){
    return searches.some((search) => tag[0].includes(search));
  });
}
