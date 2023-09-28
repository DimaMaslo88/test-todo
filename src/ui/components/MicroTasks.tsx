import React from 'react';


type MicroTasksType ={
  taskId:string
  id:string
  text:string
  status:boolean
}
export const MicroTasks = ({taskId,id,text,status}:MicroTasksType) => {

  return (
    <div>
      {text}
    </div>
  );
};


