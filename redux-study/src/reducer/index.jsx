/**
 * @param {*} state : 현재 상태
 * @param {*} action : 액션 객체
 * @returns
 */

// 상수로 관리하면 호출 할 때 좋음
export const TOGGLE_MODAL = "TOGGLE_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
  OPEN_MODAL = "OPEN_MODAL";

const initialState = {
  modal: {
    isShow: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          isShow: !state.modal.isShow,
        },
      };
    //
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          isShow: true,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: {
          isShow: false,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
