// @flow
export type CounterType =
  | 'COUNT_DOWN'
  | 'START_TIMER'
  | 'STOP_TIMER'
  | 'CHANGE_TERM';


const startTimer = (): { type: CounterType } => {
  return { type: 'START_TIMER' };
};

const stopTimer = (): { type: CounterType } => {
  return { type: 'STOP_TIMER' };
};

const changeTerm = (term: string): { type: CounterType } => {
  return { type: 'CHANGE_TERM', term };
};

export const CounterActions = {
  startTimer,
  stopTimer,
  changeTerm
};

const countDown = (): { type: CounterType } => {
  return { type: 'COUNT_DOWN' };
};

export const CounterActionsForSaga = {
  countDown
};
