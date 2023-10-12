import React, { ChangeEvent, useState } from 'react';
import style from 'styles/Tasks.module.scss';
import { ModalHelper } from 'ui/helpers/modalHelper';
import { setMicroTaskModalWindow } from 'bll/actions/modalAction';
import { useDispatch } from 'react-redux';
import s from 'styles/Textarea.module.scss';

type MicroTaskModalType = {
  title: string
  changeText: (value: string) => void

}

export const MicroTaskModal = ({ title, changeText }: MicroTaskModalType) => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const handleOutSideClick = () => {
    dispatch(setMicroTaskModalWindow(false));
  };
  const changeMicroTaskTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };
  const setTextHandler = () => {
    if (value.trim() !== '') {
      changeText(value);
      setValue('');
      dispatch(setMicroTaskModalWindow(false));
    }

  };

  return (
    <div className={style.searchContainer}>
      <ModalHelper onOutsideClick={handleOutSideClick}>
        <div className={style.microTaskBlock}>
          <h3> {title}</h3>
          <div className={style.inputBlock}>
            <textarea
              className={s.textarea}
              placeholder='напишите подзадачу...'
              value={value}
              onChange={changeMicroTaskTextHandler}

            />
            <button
              className={value ? `${style.btn} ${style.activeBtn}` : `${style.btn} ${style.notActiveBtn}`}
              onClick={setTextHandler}
            >Добавить
            </button>
          </div>

        </div>
      </ModalHelper>
    </div>
  );
};

