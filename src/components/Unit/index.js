
import React              from 'react';
import                    './index.css';

// import { Link }        from 'react-router';
// import { connect }        from 'react-redux';
// import store              from '../../redux/store.js';
// import * as actions       from '../../redux/actions';
import PureRenderMixin    from 'react-addons-pure-render-mixin';



// create pure component
export const Unit = React.createClass({

	mixins: [PureRenderMixin],

  getClassName: function() {
    return this.props.alive ? 'alive' : 'dead';
  },

  render: function() {
    return (
      <div className='unitblock'>
        <div className={this.getClassName() + ' unit'}
             onClick={() => this.props.unitClick(
               this.props.alive,
               this.props.row,
               this.props.column
             )} />
      </div>
    );
  }

});



// create connected container component
// const mapStateToProps = function(store) {
//   return {
//     alive: store.getIn(["boardMap", this.props.row, this.props.column, "alive"])
//   };
// };

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     alterState: function() {
//       dispatch(defaultAction('add-to-new', 'add-more'))
//     }
//   }
// }

//export const UnitContainer = connect(mapStateToProps, actions)(Unit);


