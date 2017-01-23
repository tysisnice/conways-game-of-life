
import reducer from '../src/redux/reducers';
import {fromJS, List} from 'immutable';
import {expect} from 'chai';



describe('reducer', () => {


	it('sets up the board', () => {
		const state = fromJS({
			boardMap: undefined,
			width: 20,
			height: 20
		});
		const nextState = reducer(state, {type: 'SETUP'});
		expect(nextState.get('boardMap')).to.contain(List([]));
	});



});