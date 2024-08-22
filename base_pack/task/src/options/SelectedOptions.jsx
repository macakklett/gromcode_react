import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import * as actions from './options.actions';
import Options from './Options';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  toggleOption: actions.toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
