import React, { ChangeEvent, useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { EditableSpan } from 'ui/components/universal/EditableSpan';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTaskStatus,
  changeTaskText,
  changeTaskTitle,
  filterCheckedItems,
  setCheckedItems,
} from 'bll/actions/tasksActions';
import { selectCheckedItems } from 'bll/selectors';
import style from 'styles/Tasks.module.scss';
import { ToolTip } from 'ui/components/tooltip/ToolTip';
import { AddIcon } from 'icons/addIcon';
import { MicroTaskModal } from 'ui/components/modals/addModalWindow/MicroTaskModal';
import { MicroTaskType } from 'bll/reducers/tasksReducer';
import { MicroTasks } from 'ui/components/MicroTasks';
import { setMicroTaskModalWindow } from 'bll/actions/modalAction';


type TaskComponentType = {
  taskId: string
  title: string
  status: boolean
  description: string
  date: string
  timeAtWork: number
  finishDate: string
  priority: number
  microTasks?: MicroTaskType[]
}
export const Task = ({
                       taskId,
                       title,
                       status,
                       description,
                       date,
                       timeAtWork,
                       finishDate,
                       priority,
                       microTasks,
                     }: TaskComponentType) => {
  const dispatch = useDispatch();
  const items = useSelector(selectCheckedItems);

  const openMicroTaskModalHandler = () => {
  dispatch(setMicroTaskModalWindow(true))

  };
  const changeCheckedItems = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      dispatch(changeTaskStatus(taskId, e.target.checked));
      dispatch(setCheckedItems([e.target.value]));
    } else {
      dispatch(changeTaskStatus(taskId, e.target.checked));
      dispatch(filterCheckedItems(items.filter(item => item !== e.target.value)));
    }
  };

  const onChangeHandler = (newValue: string) => {
    dispatch(changeTaskTitle(taskId, newValue));
  };
  const onChangeTextHandler = (newValue: string) => {
    dispatch(changeTaskText(taskId, newValue));
  };

  return (

    <div className={style.task}>
      {date}
      <div className={style.titleTaskBlock}>
        <div className={style.checkbox}>
          <Checkbox
            checked={status}
            value={taskId}
            onChange={changeCheckedItems} />
        </div>
        <ToolTip text='двойной клик,для изменения заголовка'>
          <div className={style.editableSpan}>
            <h3><EditableSpan value={title} onChange={onChangeHandler} status={status} /></h3>
          </div>
        </ToolTip>
      </div>
      <div>
        <div className={style.description}>
          <Checkbox
            checked={status}

          />
          <ToolTip text='двойной клик,для изменения задачи'>
            <EditableSpan value={description} onChange={onChangeTextHandler} status={status} />
          </ToolTip>
        </div>
        {microTasks !== undefined && microTasks.map(({ id, text, microTaskStatus }: MicroTaskType) => (
            <ul key={id}>
  <li className={style.microTaskLi}>
    <MicroTasks
     text ={text}
     status={microTaskStatus}

    />
  </li>
            </ul>
          ),
        )}
        <ToolTip text='добавить подзадачу'>
          <AddIcon
            width={20}
            height={20}
            style={{ cursor: 'pointer' }}
            onClick={openMicroTaskModalHandler}
          />
        </ToolTip>
      </div>

    </div>
  );
};

