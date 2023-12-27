import { atom } from "recoil";

// 아톰을 생성하여 사용
export const todoListState = atom({
  // 접근 키
  key: "todoListState",
  // 배열로서 관리
  default: [],
});
