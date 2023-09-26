export type SetModalWindowType = ReturnType<typeof setModalWindow>
export const setModalWindow = (isOpen: boolean) => {
  return {
    type: 'SET-MODAL-WINDOW',
    isOpen,
  } as const;
};
