export const countDown = () => {
  return { type: 'COUNT_DOWN' };
};

export const setTimer = (seconds) => {
  return { type: 'SET_TIMER', seconds };
};

export const startTimer = () => {
  return { type: 'START_TIMER' };
};

export const stopTimer = () => {
  return { type: 'STOP_TIMER' };
};
