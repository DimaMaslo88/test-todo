export type SetModalWindowType = ReturnType<typeof setModalWindow>
export const setModalWindow = (isOpen: boolean) => {
  return {
    type: 'SET-MODAL-WINDOW',
    isOpen,
  } as const;
};

export type SetMicroTaskModalWindowType = ReturnType<typeof setMicroTaskModalWindow>
export const setMicroTaskModalWindow =(microTaskModalIsOpen:boolean)=>{
  return {
    type:'SET-MICRO-TASK-MODAL-WINDOW',
    microTaskModalIsOpen
  }as const
}
