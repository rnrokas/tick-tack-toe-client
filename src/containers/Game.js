import React, { Fragment } from 'react';
import Square from '../components/Square';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

const Game = (props) => {
  const { board, squares } = props;

  const onClick = (cellIndex) => {
    if (board && squares[cellIndex] === '') {
      if (!board.finished) {
        props.onMove(cellIndex, board._id);
      }
    }
  };
  const renderBoard = () => {
    if (board) {
      return (
        <div className="board-wrapper">
          <div className="board-row">
            <Square value={squares[0]} onClick={() => onClick(0)}></Square>
            <Square value={squares[1]} onClick={() => onClick(1)}></Square>
            <Square value={squares[2]} onClick={() => onClick(2)}></Square>
          </div>
          <div className="board-row">
            <Square value={squares[3]} onClick={() => onClick(3)}></Square>
            <Square value={squares[4]} onClick={() => onClick(4)}></Square>
            <Square value={squares[5]} onClick={() => onClick(5)}></Square>
          </div>
          <div className="board-row">
            <Square value={squares[6]} onClick={() => onClick(6)}></Square>
            <Square value={squares[7]} onClick={() => onClick(7)}></Square>
            <Square value={squares[8]} onClick={() => onClick(8)}></Square>
          </div>
          <button
            className="button-prm"
            onClick={() => props.onGenerateBoard()}
          >
            RESTART
          </button>
        </div>
      );
    } else {
      return (
        <div className="board-wrapper">
          <button
            onClick={() => props.onGenerateBoard()}
            className="button-prm"
          >
            Start Game
          </button>
        </div>
      );
    }
  };
  const renderLog = () => {
    if (board) {
      return (
        <div className="log-wrapper">
          <div>LOG:</div>
          {board.moves.map((move) => (
            <div key={move._id}>
              cell number: {move.cellIndex} played by player{move.player};
            </div>
          ))}
        </div>
      );
    }
  };
  const renderBoardLabel = () => {
    if (board) {
      if (board.finished) {
        if (!board.draw) {
          return <div className="board-label">{board.winner} won</div>;
        } else {
          return <div className="board-label">It is a draw</div>;
        }
      } else {
        return <div className="board-label">Game is not finished</div>;
      }
    }
  };
  return (
    <Fragment>
      {renderBoardLabel()}
      {renderBoard()}
      {renderLog()}
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onMove: (cellIndex, boardID) =>
      dispatch({
        type: actionTypes.POST_MOVE,
        cellIndex,
        boardID,
      }),
    onGenerateBoard: () =>
      dispatch({
        type: actionTypes.CREATE_BOARD,
      }),
    onGetBoard: (boardID) =>
      dispatch({
        type: actionTypes.GET_BOARD,
        boardID,
      }),
  };
};

const mapStateToProps = (state) => ({
  board: state.game.board,
  loading: state.game.loading,
  squares: state.game.squares,
});
export default connect(mapStateToProps, mapDispatchToProps)(Game);
