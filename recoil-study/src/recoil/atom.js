import { atom, selector } from "recoil";
// 아톰을 생성하여 사용
export const todoListState = atom({
  // 접근 키
  key: "todoListState",
  // 배열로서 관리
  default: [],
});

// 필터를 위한 키
export const todoListFilterState = atom({
  // 접근 키
  key: "todoListFilterState",
  default: "Show All",
});

// 셀렉터: 두 개의 아톰에 의존하여 투두 리스트를 필터링하는 셀렉터
export const filteredTodoListState = selector({
  // 해당 키로 접근가능
  key: "filteredTodoListState",

  get: ({ get }) => {
    // get 함수: 현재 상태에서 필터된 투두 리스트를 반환

    const filter = get(todoListFilterState); // 현재 선택된 필터 타입
    const list = get(todoListState); // 전체 투두 리스트 배열

    // 필터의 값의 해당하는 리스트 배열을 보여주기 위해 스위치문
    switch (filter) {
      // 완료 항목 필터링 배열 반환
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      // 완료하지 않은 배열 목록 반화
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      // 기본값 원본 배열
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    // 투두리스트 원본 배열
    const todoList = get(todoListState);
    // 투두리스트의 배열의 길이
    const totalNum = todoList.length;
    // 완료한 투두리스트 길이
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    // 미완료한 투두리스트 길이
    const totalUncompletedNum = totalNum - totalCompletedNum;
    // 완료한 퍼센트
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    // 해당 계산값을 리턴
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
