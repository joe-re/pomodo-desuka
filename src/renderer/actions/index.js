// @flow
export type CounterType =
  | 'COUNT_DOWN'
  | 'START_TIMER'
  | 'STOP_TIMER'
  | 'CHANGE_TERM';

export type TermType =
  | 'pomodoro'
  | 'short_break'
  | 'long_break';

export type CounterActionType =
  | { type: 'COUNT_DOWN' }
  | { type: 'START_TIMER' }
  | { type: 'STOP_TIMER' }
  | { type: 'CHANGE_TERM', term: TermType };

const startTimer = (): CounterActionType => {
  return { type: 'START_TIMER' };
};

const stopTimer = (): CounterActionType => {
  return { type: 'STOP_TIMER' };
};

const changeTerm = (term: TermType): CounterActionType => {
  return { type: 'CHANGE_TERM', term };
};

export const CounterActions = {
  startTimer,
  stopTimer,
  changeTerm
};

const countDown = (): CounterActionType => {
  return { type: 'COUNT_DOWN' };
};

export const CounterActionsForSaga = {
  countDown
};
