import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import * as actions from './options.actions';
import Options from './Options';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  toggleOption: actions.toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
