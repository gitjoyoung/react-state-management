import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL } from "../../reducer";
import { ModalWrapper } from "./Modal.style";

function Modal() {
  const isShow = useSelector((state) => state.modal.isShow); //getter 함수
  const dispatch = useDispatch(); //

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL }); // 액션 타입 
  };
  if (!isShow) return <></>;

  return (
    <ModalWrapper>
      <div className="container">
        <div className="header">
          <h1>모달</h1>
          <button onClick={closeModal}> 닫기</button>
        </div>
        <p>내용</p>

      </div>
    </ModalWrapper>
  );
}

export default Modal;
