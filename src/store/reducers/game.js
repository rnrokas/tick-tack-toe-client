import * as actionTypes from '../actions/actionTypes';
import mapMovesToSquares from '../../utils/mapMovesToSquares';
const initialState = {
  board: null,
  loading: true,
  squares: ['', '', '', '', '', '', '', '', ''],
  history: [],
  isGameActive: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HISTORY_SUCCESS:
      localStorage.setItem('history', action.payload.data);
      return {
        ...state,
        history: action.payload,
      };
    case actionTypes.GET_BOARD_SUCCESS:
    case actionTypes.POST_MOVE_SUCCESS:
    case actionTypes.CREATE_BOARD_SUCCESS:
      localStorage.setItem('boardID', action.payload._id);
      return {
        ...state,
        board: action.payload,
        squares: mapMovesToSquares(action.payload.moves),
        loading: false,
      };
    case actionTypes.GET_BOARD_FAIL:
    case actionTypes.POST_MOVE_FAIL:
    case actionTypes.CREATE_BOARD_FAIL:
    case actionTypes.GET_HISTORY_FAIL:
      localStorage.removeItem('boardID');
      return {
        ...state,
        board: null,
        squares: mapMovesToSquares([]),
        loading: false,
        history: [],
      };
    case actionTypes.SWITCH_MODE:
      return {
        ...state,
        isGameActive: !state.isGameActive,
      };
    default:
      return state;
  }
};
export default reducer;
