exports.handler = function( event, context ) {
var turf = require('turf');
var ntElectorates = require('./nt_elec');

var coords = [parseFloat(event.long), parseFloat(event.lat)];
var features = [turf.point(coords)];
var fc = turf.featureCollection(features);

var tagged = turf.tag(fc, ntElectorates, 'Name');

// Return first feature
var electorate = tagged.features[0].properties.undefined;
console.log("Returned result of " + electorate);
context.done(null, electorate);

}

