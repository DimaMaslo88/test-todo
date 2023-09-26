import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import { Todolist } from 'ui/pages/todolist/Todolist';
import { Tasks } from 'ui/components/Tasks';
import { Tasks2 } from 'ui/components/Tasks2';

export const Pages = () => {
  return (
    <div>
<Routes>
<Route path='/' element={<Navigate to='/todolist'/>}/>
<Route path='/todolist' element={<Todolist />}/>
<Route path='/tasks' element={<Tasks2 />}/>


</Routes>
    </div>
  );
};

