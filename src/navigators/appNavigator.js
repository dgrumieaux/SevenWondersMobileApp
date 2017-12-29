import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Scoring from '../components/screens/Scoring';
import Setup from '../components/screens/Setup';
import PlayerEntry from '../components/screens/PlayerEntry';

export const AppNavigator = StackNavigator({
    Scoring: { screen: Scoring },
    PlayerEntry: { screen: PlayerEntry },
    Setup: { screen: Setup },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);