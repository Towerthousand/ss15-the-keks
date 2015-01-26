
var TYPE = {};
/*
TYPE.PLAIN = 0;
TYPE.WHEAT = 1;
TYPE.FOREST = 2;
TYPE.OCEAN = 3;
*/
TYPE.PLAIN = 'plain';
TYPE.WHEAT = 'wheat';
TYPE.FOREST = 'forest';
TYPE.OCEAN = 'ocean';

var COLOR = {};

COLOR.CELL = {};
COLOR.CELL[TYPE.PLAIN] = '#B8E986';
COLOR.CELL[TYPE.WHEAT] = '#FFF35A';
COLOR.CELL[TYPE.FOREST] = '#62A462';
COLOR.CELL[TYPE.OCEAN] = '#9DC9FF';

COLOR.PLAYER = [
	 '#FF754D' //orangy
	,'#4D84FF' //sort of a blue
];

CELL_WIDTH = 150;
CELL_HEIGHT = 150;
APOTHEM = Math.floor( (CELL_WIDTH/2) * Math.cos(Math.PI/6) );
DPXRATIO = window.devicePixelRatio;

// TERRAIN_GENERATOR
var DROP_MARGIN = 10;