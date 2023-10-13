import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import s from 'styles/input.module.scss';
import { addTask, addTaskId } from 'bll/actions/tasksActions';
import { useDispatch, useSelector } from 'react-redux';
import style from 'styles/Tasks.module.scss';
import { setModalWindow } from 'bll/actions/modalAction';
import { ModalHelper } from 'ui/helpers/modalHelper';
import st from 'styles/Textarea.module.scss';

type ModalType = {
  title: string
}
export const Modal = ({ title }: ModalType) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>('');
  const [text, setText] = useState<string>('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

  };
  const date = new Date();

  function addZero(num: number) {
    if (num >= 0 && num <= 9) {
      return `0${num}`;
    }
    return num;

  }

  const actualDate = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${addZero(date.getFullYear())}`;
  const addTaskHandler = () => {
    if (value.trim() !== '') {
      dispatch(addTask(value, text, actualDate));
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

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };
  const handleOutSideClick = () => {
    dispatch(setModalWindow(false));
  };
  return (

    <div className={style.searchContainer}>
      <ModalHelper onOutsideClick={handleOutSideClick}>
        <div className={style.addTaskBlock}>
          <h3>{title}</h3>


          <div className={style.inputBlock}>
            <input
              placeholder='enter task'
              value={value}
              onChange={onChangeHandler}
              onKeyDown={onKeyDownHandler}
              className={s.input}
            />

            <textarea
              className={st.textarea}
              value={text}
              onChange={onChangeTextHandler}
            />

          </div>
          <div className={style.buttonBlock}>
            <button
              disabled={!rightValue}
              onClick={addTaskHandler}
              className={rightValue ? `${style.btn} ${style.activeBtn}` : `${style.btn} ${style.notActiveBtn}`}
            >Add Task
            </button>
          </div>

        </div>

      </ModalHelper>
    </div>

  );
};

