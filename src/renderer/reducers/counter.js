// @flow
export type Counter = {
  term: string,
  count: number
}

const counter = (state: Counter = { term: 'pomodoro', count: 60 * 25 }, action: any) => {
  switch (action.type) {
  case 'CHANGE_TERM':
    switch (action.term) {
    case 'pomodoro':
      return { term: 'pomodoro', count: 60 * 25 };
    case 'short_break':
      return { term: 'short_break', count: 60 * 5 };
    case 'long_break':
      return { term: 'long_break', count: 60 * 15 };
    default:
      return state;
    }
  case 'COUNT_DOWN':
    const newCount = state.count - 1;
    return Object.assign({}, state, { count: newCount < 0 ? 0 : newCount });
  default:
    return state;
  }
};

export default counter;
