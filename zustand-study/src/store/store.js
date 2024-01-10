import { create } from 'zustand'


const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.qty }
    case 'decrement':
      return { count: state.count - action.qty }
    default:
      return state
  }
}

export const useCountStore = create((set) => ({
  count: 0,
  dispatch: (action) => set((state) => countReducer(state, action)),
}))