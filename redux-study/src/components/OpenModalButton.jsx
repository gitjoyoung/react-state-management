import React from "react";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../reducer";

export default function OpenModalButton() {
  const dispatch = useDispatch();
  const openModal = () => {
    // 오타 방지를 위해 상수 사용
    dispatch({ type: OPEN_MODAL });
  };
  return <button onClick={openModal}>모달 열기</button>;
}
