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
    const res = yield axios.post(
      `http://localhost:5000/action/move/${boardID}`,
      body,
      config
    );
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
    const res = yield axios.post(`http://localhost:5000/action/board`);
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
    const res = yield axios.get(
      `http://localhost:5000/action/board/${boardID}`
    );
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
