import React from 'react';
import {Title} from "ui/components/universal/Title";
import style from 'styles/App.module.scss'
import s from 'styles/Title.module.scss'
import {Tasks} from "ui/components/Tasks";
import { Pages } from 'ui/pages/Pages';

function App() {
    return (
      <div>
        <Pages/>
      </div>
        //
        // <div className={style.appContainer}>
        //     <div className={style.toDosContainer}>
        //         <Title title='ToDos' className={s.title}/>
        //         <Tasks/>
        //     </div>

        // </div>
    );
}

export default App;
