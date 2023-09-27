import { SetMicroTaskModalWindowType, SetModalWindowType } from 'bll/actions/modalAction';

export const ModalState = {
  isOpen: false,
  microTaskModalIsOpen: false,
};

export type ModalReducerType = {
  isOpen: boolean
  microTaskModalIsOpen:boolean
}

export type ModalReducerActionType = SetModalWindowType
|SetMicroTaskModalWindowType

export const ModalReducer = (state: ModalReducerType = ModalState, action: ModalReducerActionType): ModalReducerType => {
  switch (action.type) {
    case 'SET-MODAL-WINDOW': {
      return { ...state, isOpen: action.isOpen };
    }
    case 'SET-MICRO-TASK-MODAL-WINDOW':{
      return {...state,microTaskModalIsOpen:action.microTaskModalIsOpen}
    }
    default :
      return state;

  }
};
