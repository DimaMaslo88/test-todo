import React, { useEffect, DragEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBoard,
  selectCheckedItems,
  selectFilter,
  selectMicroTaskModal,
  selectModal,
  selectTaskId,
  selectTasks,
} from 'bll/selectors';
import { TaskType } from 'bll/reducers/tasksReducer';
import { Task } from 'ui/components/Task';
import {
  addMicroTaskText,
  filterCheckedItems,
  filterTasksByStatus,
  removeTasksStatus,
} from 'bll/actions/tasksActions';
import style from 'styles/Tasks.module.scss';
import Draggable from 'react-draggable';

import { setModalWindow } from 'bll/actions/modalAction';
import { AddIcon } from 'icons/addIcon';
import { ToolTip } from 'ui/components/tooltip/ToolTip';
import { Modal } from 'ui/components/modals/addModalWindow/Modal';
import { MicroTaskModal } from 'ui/components/modals/addModalWindow/MicroTaskModal';
import { BackArrow } from 'icons/arrow';
import { useNavigate,Navigate } from 'react-router-dom';

export const Tasks2 = () => {
  const dispatch = useDispatch();
  let tasks = useSelector(selectTasks);
  const filters = useSelector(selectFilter);
  const checkedItems = useSelector(selectCheckedItems);
  const modal = useSelector(selectModal);
  const microTaskModal = useSelector(selectMicroTaskModal);
  const taskID = useSelector(selectTaskId);
  const boards = useSelector(selectBoard);
const navigate = useNavigate()
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
    filterTasks = tasks.filter(f => !f.status);
  }
  if (filters === 'completed') {
    filterTasks = tasks.filter(f => f.status);
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
  const changeMicroTaskTextModalWindow = (value: string) => {
   const addMicroTaskText1 = addMicroTaskText(taskID, value);
    dispatch(addMicroTaskText1);
  };
const onNavigateHandler = ()=>{
  navigate('/todolist')
}

  return (

    <div className={style.tasksContainer}>
      {modal &&
      <div className={style.modalContainer}>
        <Modal title='Добавить Задачу' />
      </div>
      }
      {microTaskModal &&
      <div className={style.modalContainer}>
        <MicroTaskModal changeText={changeMicroTaskTextModalWindow} title='Добавить подзадачу' />
      </div>
      }

      <div className={style.headerTasksBlock}>
        <ToolTip text='Добавить Задание'>
          < AddIcon
            width={50}
            height={50}
            style={{ cursor: 'pointer' }}
            onClick={callModalWindowHandler}
          />
        </ToolTip>

        <BackArrow
        width={50}
        height={50}
        style={{ cursor: 'pointer' }}
        onClick={onNavigateHandler}
        />

      </div>
      <div className={style.taskBlock}>
        {tasks.map(
          (task: TaskType) => (
            <Draggable key={task.id}>
              <ul
                key={task.id}

              >
                <li className={style.li}>
                  <Task
                    key={task.id}
                    taskId={task.id}
                    title={task.title}
                    status={task.status}
                    description={task.description}
                    date={task.date}
                    timeAtWork={task.timeAtWork}
                    finishDate={task.finishDate}
                    priority={task.priority}
                    microTasks={task.microTasks}
                  />
                </li>

              </ul>
            </Draggable>

          ),
        )}
      </div>
      <div className={style.columnBlock}>
        {boards.map(board => (
          <div className={style.column} key={board.id}>
            <h1 className={style.h1}>{board.title}</h1>
          </div>
        ))}
      </div>


      {/* <div className={style.columnBlock}> */}
      {/*  <div className={style.column}> */}
      {/*    <h1 className={style.h1}>Очередь</h1> */}

      {/*  </div> */}
      {/*  <div className={style.column}> */}
      {/*    <h1 className={style.h1}>В работе</h1> */}
      {/*  </div> */}
      {/*  <div className={style.column}> */}
      {/*    <h1 className={style.h1}>Сделано</h1> */}
      {/*  </div> */}


      {/* </div> */}
    </div>
  );
};

