import './App.css';
import * as actionTypes from './store/actions/actionTypes';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Game from './containers/Game';

const App = (props) => {
  useEffect(() => {
    if (localStorage.boardID) {
      props.onGetBoard(localStorage.boardID);
    }
  }, []);
  return (
    <Fragment>
      <Game></Game>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetBoard: (boardID) =>
      dispatch({
        type: actionTypes.GET_BOARD,
        boardID,
      }),
  };
};

const mapStateToProps = (state) => ({
  boardID: state.game.board,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
