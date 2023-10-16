import React, { ChangeEvent, useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useDispatch } from 'react-redux';
import { changeMicroTasksStatus, deleteMicroTask } from 'bll/actions/tasksActions';
import style from 'styles/Tasks.module.scss';
import { DeleteIcon } from 'icons/delete';

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
  const deleteMicroTaskHandler=()=>{
dispatch(deleteMicroTask(taskId,id))
  }
  return (
    <div className={style.microTasksContainer}>
      {text &&
      <div>
        <Checkbox
          checked={status}
          value={id}
          onChange={onChangeValueHandler}
        />
      </div>
      }


      <div className={status ? style.microTasksText : ''}>
        {text}
      </div>

      {text && <div>
        <DeleteIcon
          width={25}
          height={25}
          style={{cursor:'pointer'}}
          onClick={deleteMicroTaskHandler}
        />
      </div>}


    </div>
  );
};


