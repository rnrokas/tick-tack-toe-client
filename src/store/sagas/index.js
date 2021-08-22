import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { moveSaga, createBoardSaga, getBoardSaga, getHistorySaga } from './game';

export function* watchGame() {
  yield all([takeEvery(actionTypes.POST_MOVE, moveSaga)]);
  yield all([takeEvery(actionTypes.CREATE_BOARD, createBoardSaga)]);
  yield all([takeEvery(actionTypes.GET_BOARD, getBoardSaga)]);
  yield all([takeEvery(actionTypes.GET_HISTORY, getHistorySaga)]);
}
