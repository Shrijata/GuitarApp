var fretNotes = ['E', 'F', 'F#', 'G', 'G#', 'A', 'Bb','B', 'C', 'C#', 'D', 'D#'];
var soundData = {
	'E': 'e.mp3',
	'F': 'f.mp3',
	'F#': 'f-Sharp.mp3',
	'G': 'g.mp3',
	'G#': 'g-Sharp.mp3',
	'A': 'a.mp3',
	'Bb': 'bb.mp3',
	'B': 'b.mp3',
	'C': 'c.mp3',
	'C#': 'c-Sharp.mp3',
	'D': 'd.mp3',
	'D#': 'd-Sharp.mp3'
};
var initNote = ['E','A','D','G','B'];

var buildGuitar = function(notes, frets) {
	var guitarData = {};
	notes.forEach(function(elem) {
		var pos = frets.indexOf(elem);
		var arr1=frets.slice(pos,frets.length);
		var arr2=frets.slice(0,pos);
		var tempArr=arr1.concat(arr2);
		guitarData[elem] = tempArr;
	})
	return guitarData;
}

var	drawGuitar = function(obj){
	var htmlData = '';
	for(var key in obj){
		htmlData += '<div class="row">';
		obj[key].forEach(function(elem){
			htmlData += '<button class="btn btn-success col-xs-1">'+elem+'</button>';
		})
		htmlData += '</div>';
	}
	$('.guitarBox').html(htmlData);
}


var displayNode = function(text){
	$('.guitarNode').html(text);
	setTimeout(function() {
		$('.guitarNode').html('');
	}, 2000);	
}

$(document).ready(function() {
	drawGuitar(buildGuitar(initNote,fretNotes));
	$('button').click(function(){
		displayNode($(event.target).html());
		var audio = new Audio('sounds/'+soundData[$(event.target).html()]);
		audio.play();
	});
})

