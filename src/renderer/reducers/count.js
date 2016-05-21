const count = (state = 5, action) => {
  switch (action.type) {
  case 'SET_TIMER':
    return action.seconds;
  case 'COUNT_DOWN':
    const newState = state - 1;
    return newState < 0 ? 0 : newState;
  default:
    return state;
  }
};

export default count;
