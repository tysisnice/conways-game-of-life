
import {Map, List, fromJS} from 'immutable';


const initialState = Map({
		width: 45,
		height: 35,
		gameRunning: true,
		generations: 0
	});



// the actual reducer
const reducer = function(state = initialState, action) {

	switch(action.type) {

		case 'SETUP':
		const width = state.get('width');
		const height = state.get('height');
			return state.set('boardMap', setBoard(width, height)).set('generations', 0);

		case 'UNIT_CLICK':
			return state.setIn(["boardMap", action.row, action.column, "alive"], !action.alive)
									.setIn(["boardMap", action.row, action.column, "old"], false);

		case 'PLAY_PAUSE':
			return state.update("gameRunning", running => !running);

		case 'RANDOMIZE':
			return state.set('boardMap', randomize(state.get('boardMap')));

		case 'RUN_GAME':
			if (state.get('gameRunning')) {
				return state.set('boardMap',
					playRound(state.get('boardMap'))).update('generations', gen => gen+1);
			}
			else { return state };

		default:
			return state;
	}

}



// functions
function setBoard(width, height) {
	var board = [];
	for (var i = 0; i < height; i++ ) {
		var row = [];
		for (var o = 0; o < width; o++ ) {
			row.push( Map({old: false, alive: false, id: 'id'+i+'.'+o}) );
		}
		board.push(List(row));
	}
	return List(board);
}


function randomize(immutableBoard) {
	var board = immutableBoard.toJS();
	for ( var i = 0; i < board.length; i++ ) {
		for ( var o = 0; o < board[i].length; o++ ) {
			const randomNum = Math.floor(Math.random() * 5);
			if (randomNum < 2) {
				board[i][o].alive = true;
			} else {
				board[i][o].alive = false;
			}
		}
	}
	return fromJS(board);
}


function playRound(b) {
	var board = b.toJS();
	var newBoard = [];
	for ( var i = 0, length = board.length; i < length; i++ ) {
		for ( var o = 0, width = board[i].length; o < width; o++ ) {
			let num = 0;
			let row = [];
			let iMinusOne = i - 1;
			let iPlus_One = i + 1;
			let oMinusOne = o - 1;
			let oPlus_One = o + 1;

			if ( i === 0 )      		iMinusOne = length - 1;
			if ( i === length - 1 ) iPlus_One = 0					;
			if ( o === 0 )					oMinusOne = width  - 1;
			if ( o === width - 1 ) 	oPlus_One = 0					;

			if ( board[iMinusOne][oMinusOne].alive )  num++ ;
			if ( board[iMinusOne][	 	o 	 ].alive )  num++ ;
			if ( board[iMinusOne][oPlus_One].alive )  num++ ;
			if ( board[ 	 i		][oMinusOne].alive )  num++ ;
			if ( board[ 	 i 	  ][oPlus_One].alive )  num++ ;
			if ( board[iPlus_One][oMinusOne].alive )  num++ ;
			if ( board[iPlus_One][ 		o 	 ].alive )  num++ ;
			if ( board[iPlus_One][oPlus_One].alive )  num++ ;

			if (  board[i][o].alive )  {
				if (num === 2 || num === 3) {
					newBoard[i][o].old = true;
				} else {
					newBoard[i][o].alive = false ;
					newBoard[i][o].old = false;
				}
			}
			else {
				if ( num === 3 ) {
					newBoard[i][o].alive = true ;
				}
			}

		}
	}
	return fromJS(newBoard);
}




export default reducer;