import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedItems, selectFilter, selectModal, selectTasks } from 'bll/selectors';
import { TaskType } from 'bll/reducers/tasksReducer';
import { Task } from 'ui/components/Task';
import {
  addTask,
  changeTaskStatus,
  filterCheckedItems,
  filterTasksByStatus,
  removeTasksStatus, setCheckedItems,
} from 'bll/actions/tasksActions';
import style from 'styles/Tasks.module.scss';
import s from 'styles/input.module.scss';
import Draggable from 'react-draggable';

import { setModalWindow } from 'bll/actions/modalAction';
import { AddIcon } from 'icons/addIcon';
import { ToolTip } from 'ui/components/tooltip/ToolTip';
import { ModalHelper } from 'ui/helpers/modalHelper';
import { Modal } from 'ui/components/modals/addModalWindow/Modal';

export const Tasks2 = () => {
  const dispatch = useDispatch();
  let tasks = useSelector(selectTasks);
  const filters = useSelector(selectFilter);
  const checkedItems = useSelector(selectCheckedItems);
  const modal = useSelector(selectModal);

  // const [value, setValue] = useState<string>('');
  useEffect(() => {
    const a = localStorage.getItem('tasks');
    if (a) {
      tasks = JSON.parse(a);
    }
  }, []);
//   useEffect(()=>{
// const  newTasks = localStorage.getItem('tasks')
//      if(newTasks){
//       tasks = JSON.parse(newTasks)
//
//
//      }
//
//
//   },[])
// useEffect(()=>{
//   localStorage.setItem('tasks',JSON.stringify(tasks))
// },[tasks])
//   const rightValue = value.trim();

  let filterTasks = tasks;
  if (filters === 'active') {
    filterTasks = tasks.filter(f => !f.isDone);
  }
  if (filters === 'completed') {
    filterTasks = tasks.filter(f => f.isDone);
  }
  // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.currentTarget.value);
  //
  // };
  // const addTaskHandler = () => {
  //   if (value.trim() !== '') {
  //     dispatch(addTask(value));
  //     setValue('');
  //   }
  // };
  // const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     addTaskHandler();
  //   }
  // };
  const callModalWindowHandler = () => {
    dispatch(setModalWindow(true));
  };
  const onAllClickHandler = () => {

    dispatch(filterTasksByStatus('all'));
  };
  const onActiveClickHandler = () => {

    dispatch(filterTasksByStatus('active'));
  };
  const onCompletedClickHandler = () => {

    dispatch(filterTasksByStatus('completed'));
  };
  const clearFilterHandler = () => {
    dispatch(removeTasksStatus(false));
    dispatch(filterCheckedItems([]));

  };

  return (

    <div className={style.tasksContainer}>
      {modal &&
      <div className={style.modalContainer}>
        <Modal  title = 'Добавить Задачу'/>
      </div>

      }
      <div>
        <ToolTip text='Добавить Задание'>
          < AddIcon
            width={50}
            height={50}
            style={{ cursor: 'pointer' }}
            onClick={callModalWindowHandler}
          />
        </ToolTip>
      </div>
      <div className={style.taskBlock}>
        {tasks.map(
          ({ id, title, isDone }: TaskType) => (
            <Draggable>
              <ul key={id}>
                <li className={style.li}>
                  <Task key={id} taskId={id} title={title} isDone={isDone} />
                </li>

              </ul>

            </Draggable>
          ),
        )}
      </div>

      <div className={style.columnBlock}>
        <div>
          <h1 className={style.h1}>Queue</h1>

        </div>
        <div>
          <h1 className={style.h1}>Development</h1>
        </div>

        <h1 className={style.h1}>Done</h1>

      </div>
    </div>
  );
};

