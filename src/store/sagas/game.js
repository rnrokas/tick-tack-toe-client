import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import { put } from 'redux-saga/effects';

export function* moveSaga(action) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { cellIndex, boardID } = action;
    const body = { cellIndex };
    const res = yield axios.post(`https://tictactoeapi-3rsmfuzmuq-lz.a.run.app/action/move/${boardID}`, body, config);
    yield put({
      type: actionTypes.POST_MOVE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: actionTypes.POST_MOVE_FAIL,
    });
  }
}
export function* createBoardSaga(action) {
  try {
    const res = yield axios.post(`https://tictactoeapi-3rsmfuzmuq-lz.a.run.app/action/board`);
    yield put({
      type: actionTypes.CREATE_BOARD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: actionTypes.CREATE_BOARD_FAIL,
    });
  }
}

export function* getBoardSaga(action) {
  try {
    const { boardID } = action;
    const res = yield axios.get(`https://tictactoeapi-3rsmfuzmuq-lz.a.run.app/action/board/${boardID}`);
    yield put({
      type: actionTypes.GET_BOARD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: actionTypes.GET_BOARD_FAIL,
    });
  }
}

export function* getHistorySaga() {
  try {
    const res = yield axios.get(`https://tictactoeapi-3rsmfuzmuq-lz.a.run.app/action/history`);
    yield put({
      type: actionTypes.GET_HISTORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: actionTypes.GET_HISTORY_FAIL,
    });
  }
}
