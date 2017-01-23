
import React from 'react';
import './index.css';

// import { Link } from 'react-router';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import { defaultAction } from '../../redux/actions';
import PureRenderMixin from 'react-addons-pure-render-mixin';



// create pure component
export const ExampleApp = React.createClass({

	mixins: [PureRenderMixin],

  render: function() {
    return (
      <div className="ExampleApp">
      	hello {this.props.name}
      </div>
    );
  }

});



// create connected container component
const mapStateToProps = function(store) {
  return {
    propName: store
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    alterState: function() {
      dispatch(defaultAction('add-to-new', 'add-more'))
    }
  }
}

export const ExampleAppContainer = connect(mapStateToProps, mapDispatchToProps)(ExampleApp);


