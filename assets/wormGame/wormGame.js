console.log("변경점 반영" + 234);
var $viewer = $( "#viewer" );
var fieldSize = {x: 15, y:30};
var wg = new WormGameEngine( fieldSize );
var arrMaker = new WormGameEngine.DimensionalArray( fieldSize );

wg.field.setEdgeObstacles();

$viewer.html( arrMaker.printField(wg.field) );
//console.log(arrMaker.printField(wg.field));



