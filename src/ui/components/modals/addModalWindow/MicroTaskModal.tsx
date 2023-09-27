import React from 'react';
import style from 'styles/Tasks.module.scss'
import { ModalHelper } from 'ui/helpers/modalHelper';
import { setMicroTaskModalWindow, setModalWindow } from 'bll/actions/modalAction';
import { useDispatch } from 'react-redux';

type MicroTaskModalType={
  title:string

}

export const MicroTaskModal = ({title}:MicroTaskModalType) => {
  const dispatch = useDispatch()
  const handleOutSideClick = () => {
    dispatch(setMicroTaskModalWindow(false));
  };
  return (
    <div className={style.microTaskModal}>
      <ModalHelper onOutsideClick={handleOutSideClick}>
        <div className={style.microTaskBlock}>
     <h3> {title}</h3>
         <textarea />
          <button>Добавить</button>
        </div>
      </ModalHelper>
    </div>
  );
};

