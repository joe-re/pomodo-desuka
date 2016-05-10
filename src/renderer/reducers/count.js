const todos = (state = 0, action) => {
  switch (action.type) {
  case 'COUNT_UP':
    return state + 1;
  default:
    return state;
  }
};

export default todos;
