// @flow
export const countDown = () => {
  return { type: 'COUNT_DOWN' };
};

export const setTimer = (seconds: number) => {
  return { type: 'SET_TIMER', seconds };
};

export const startTimer = () => {
  return { type: 'START_TIMER' };
};

export const stopTimer = () => {
  return { type: 'STOP_TIMER' };
};

export const changeTerm = (term: string) => {
  return { type: 'CHANGE_TERM', term };
};
