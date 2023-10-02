import React, { ChangeEvent, useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useDispatch } from 'react-redux';
import { changeMicroTasksStatus } from 'bll/actions/tasksActions';
import style from 'styles/Tasks.module.scss';

type MicroTasksType = {
  taskId: string
  id: string
  text: string
  status: boolean
}
export const MicroTasks = ({ taskId, id, text, status }: MicroTasksType) => {
  const dispatch = useDispatch();
  const onChangeValueHandler = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      dispatch(changeMicroTasksStatus(taskId, id, e.target.checked));
    } else {
      dispatch(changeMicroTasksStatus(taskId, id, e.target.checked));
    }
  };
  return (
    <div className={style.microTasksContainer} >
      <div >
        <Checkbox
          checked={status}
          value={id}
          onChange={onChangeValueHandler}
        />
      </div>

      <div className={status ? style.microTasksText : ''}>
        {text}
      </div>

    </div>
  );
};


