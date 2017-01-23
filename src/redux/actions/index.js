
export function defaultAction(x, y) {

	const n = y + 'poop';

	return {
		type: 'DEFAULT',
		new: x,
		more: n
	}
}


export function resetBoard() {
	return {
		type: 'SETUP'
	}
}


export function unitClick(alive, row, column) {
	return {
		type: 'UNIT_CLICK',
		alive: alive,
		row: Number(row),
		column: Number(column)
	}
}


export function playPause() {
	return {
		type: 'PLAY_PAUSE'
	}
}

export function randomize() {
	return {
		type: 'RANDOMIZE'
	}
}

