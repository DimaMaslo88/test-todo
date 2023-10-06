import {
  AddMicroTaskTextType, AddTaskIdType,
  AddTaskType, ChangeMicroTasksStatusType,
  ChangeTaskStatusType, ChangeTaskTextType,
  ChangeTaskType, FilterCheckedItemsType,
  FilterTasksByStatusType, RemoveTasksStatusType,
  SetCheckedItemsType,
} from 'bll/actions/tasksActions';
import { v1 } from 'uuid';

const tasksState: TasksStateType = {
  boards:[
    {
    id:v1(),
    title:'Очередь'
  },
    {
      id:v1(),
      title:'В работе'
    },
    {
      id:v1(),
      title:'Сделано'
    },
  ],
  tasks: [
    {
      id: v1(),
      title: 'Тестовое задание',
      description: 'Сделать тестовое задание в срок',
      status: false,
      date: '27.09.2023',
      timeAtWork: 10,
      finishDate: '28.09.2023',
      priority: 1,
      microTasks: [
        {
          id: v1(),
          text: '',
          microTaskStatus: false,
        },
      ],
    },
  ],
  filter: 'all',
  checkedId: [],
  taskId: '',
};
export type MicroTaskType = {
  id: string
  text: string
  microTaskStatus: boolean
}
export type  BoardType ={
  id:string,
  title:string
}
export type TaskType = {
  id: string
  title: string
  description: string
  status: boolean
  date: string
  timeAtWork: number
  finishDate: string
  priority: number
  microTasks: MicroTaskType[]
}
export type FilterTaskType = 'all' | 'active' | 'completed'


export type TasksStateType = {
  boards:BoardType[]
  tasks: TaskType[]
  filter: FilterTaskType
  checkedId: string[]
  taskId: string
}

export type TasksActionType = AddTaskType
  | ChangeTaskType
  | ChangeTaskStatusType
  | FilterTasksByStatusType
  | SetCheckedItemsType
  | FilterCheckedItemsType
  | RemoveTasksStatusType
  | ChangeTaskTextType
  | AddMicroTaskTextType
  | AddTaskIdType
  | ChangeMicroTasksStatusType
export const TasksReducer = (state: TasksStateType = tasksState, action: TasksActionType): TasksStateType => {
  switch (action.type) {
    case 'ADD-TASK': {
      const newTask: TaskType = {
        id: v1(),
        title: action.title,
        status: false,
        description: action.description,
        date: action.date,
        timeAtWork: 0,
        finishDate: '',
        priority: 2,
        microTasks: [
          {
            id: v1(),
            text: '',
            microTaskStatus: false,
          },
        ],

      };
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case 'ADD-TASK-ID': {
      return { ...state, taskId: action.id };
    }
    case 'CHANGE-TASK-TITLE': {
      return {

        ...state,
        tasks: state.tasks.map(task => task.id === action.id ? { ...task, title: action.value } : task),
      };
    }
    case 'CHANGE-TASK-TEXT': {
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.id ? { ...task, description: action.textValue } : task),
      };
    }
    case 'CHANGE-TASK-STATUS': {
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.id ? { ...task, status: action.status } : task),
      };
    }
    case 'FILTER-TASKS-BY-STATUS': {

      return {
        ...state, filter: action.filter,
      };
    }
    case 'SET-CHECKED-ITEMS': {
      return { ...state, checkedId: [...state.checkedId, ...action.checkedId] };
    }
    case 'FILTER-CHECKED-ITEMS': {
      return { ...state, checkedId: action.filterCheckedId };
    }
    case 'REMOVE-TASKS-STATUS': {
      return { ...state, tasks: state.tasks.map(task => task ? { ...task, status: action.remove } : task) };
    }
    case 'ADD-MICRO-TASK-TEXT': {
      const newMicroTask: MicroTaskType = {
        id: v1(),
        text: action.value,
        microTaskStatus: false,
      };
      return {
        ...state, tasks: state.tasks.map(task => task.id === action.taskId ? {
          ...task, microTasks: [...task.microTasks, newMicroTask],
        } : task),
      };

      //   return {...state,tasks:state.tasks.
      //     map(task=>task.id ===action.taskId ? {...task.microTasks?.
      //       map(m=>m.id===action.id?{...m,text:action.value}:m)}:task)}
    }
    case 'CHANGE-MICRO-TASK-STATUS':{
      return {...state,tasks:state.tasks.
        map(task=>task.id === action.taskId ? {...task,microTasks:task.microTasks.
          map(t=>t.id ===action.id ? {...t,microTaskStatus:action.isChecked}:t)}:task)}
    }
    default:
      return state;
  }
};
