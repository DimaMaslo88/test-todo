import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import s from 'styles/input.module.scss';
import { addTask } from 'bll/actions/tasksActions';
import { useDispatch, useSelector } from 'react-redux';
import style from 'styles/Tasks.module.scss';
import { setModalWindow } from 'bll/actions/modalAction';
import { selectModal } from 'bll/selectors';
import { ModalHelper } from 'ui/helpers/modalHelper';

type ModalType={
  title:string
}
export const Modal = ({title}:ModalType) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

  };
  const addTaskHandler = () => {
    if (value.trim() !== '') {
      dispatch(addTask(value));
      setValue('');
      dispatch(setModalWindow(false));
    }
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTaskHandler();
    }
  };
  const rightValue = value.trim();
  const handleOutSideClick = () => {
    dispatch(setModalWindow(false));
  };
  return (
    <div className={style.searchContainer} >
      <h3>{title}</h3>
      <ModalHelper onOutsideClick={handleOutSideClick}>
        <div className={style.addTaskBlock}>
      <input
        placeholder='enter task'
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        className={s.input}
      />
      <button
        disabled={!rightValue}
        onClick={addTaskHandler}
        className={rightValue ? `${style.btn} ${style.activeBtn}` : `${style.btn} ${style.notActiveBtn}`}
      >Add Task
      </button>
        </div>
      </ModalHelper>
    </div>
  );
};

