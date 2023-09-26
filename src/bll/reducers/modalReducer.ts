import { SetModalWindowType } from 'bll/actions/modalAction';

export const ModalState = {
  isOpen:false

}

export type ModalReducerType={
  isOpen:boolean
}

export type ModalReducerActionType = SetModalWindowType

export const ModalReducer = (state:ModalReducerType = ModalState,action:ModalReducerActionType):ModalReducerType=>{
  switch (action.type) {
    case 'SET-MODAL-WINDOW':{
      return {...state,isOpen:action.isOpen}
    }
    default :  return state

  }
}
