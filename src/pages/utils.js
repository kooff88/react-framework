export const reducer = (state, action) => {
    switch(action.type) {
      case 'decrement':
        return {...state, num: state.num - 1}
      case 'increment':
        return {...state, num: state.num + 1}
      default:
        return state;
    }
  }