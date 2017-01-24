
import React                 from 'react';
import                       './index.css';

// import { Link } from 'react-router';
import { connect }           from 'react-redux';
import store                 from '../../redux/store.js';
import * as actions          from '../../redux/actions';
import PureRenderMixin       from 'react-addons-pure-render-mixin';

import { Unit }              from '../Unit';



// create pure component
export const Board = React.createClass({

	mixins: [PureRenderMixin],

  renderUnits: function(row, rowIndex) {
    return row.map((tile, tileIndex) => {
      return (
        <Unit //unitId={tile.get('id')}
              row={rowIndex}
              column={tileIndex}
              key={'key '+tile.get('id')}
              alive={tile.get('alive')}
              old={tile.get('old')}
              unitClick={this.props.unitClick}
              />
      );
    });
  },

  renderRows: function() {
    return this.props.boardMap.map((row, index) => {
      return (
        <div //style={{width: this.props.rowWidth}}
             className="row"
             key={'key'+index}
             id={'row'+index}>
          {this.renderUnits(row, index)}
        </div>
      );
    })
  },

  render: function() {
    return (
      <div className="board">
        <div className="button-container">
          <button className='button' onClick={this.props.playPause}>
            {this.props.gameRunning ? 'Pause' : 'Play'}
          </button>
          <button className='button' onClick={this.props.resetBoard}>
            Reset
          </button>
          <button className='button' onClick={this.props.randomize}>
            Randomize
          </button>
          <div className='gen' >Generations: {this.props.generations}</div>
        </div>
        <div className='rows'>
          <div>
            {this.renderRows()}
          </div>
        </div>
      </div>
    );
  }

});



// create connected container component
const mapStateToProps = function(store) {
  return {
    boardMap: store.get('boardMap'),
    //rowWidth: (store.get('width') * 21 + 2),
    gameRunning: store.get('gameRunning'),
    generations: store.get('generations')
  };
};

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     alterState: function() {
//       dispatch(defaultAction('add-to-new', 'add-more'))
//     }
//   }
// }

export const BoardContainer = connect(mapStateToProps, actions)(Board);


