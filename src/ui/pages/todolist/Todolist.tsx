import React from 'react';
import style from 'styles/App.module.scss';
import { Title } from 'ui/components/universal/Title';
import s from 'styles/Title.module.scss';
import st from 'styles/Tasks.module.scss'
import { useNavigate } from 'react-router-dom';

export const Todolist = () => {
  const navigate = useNavigate();
  const navigateToTasksHandler = () => {
    navigate('/tasks');
  };
  return (

    <div className={style.appContainer}>
      <div className={style.toDosContainer}>
        <Title title='ToDos' className={s.title} />
        <button
          onClick={navigateToTasksHandler}
          className={ st.activeBtn }
        > Go to task page
        </button>
      </div>

    </div>
  );
};

