import React from 'react';
import { MicroTaskModal } from 'ui/components/modals/addModalWindow/MicroTaskModal';

type MicroTasksType ={
  text:string
  status:boolean
}
export const MicroTasks = ({text,status}:MicroTasksType) => {
  return (
    <div>

      {text}
    </div>
  );
};


