export default function saveData(state = { data: [] }, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        data: [...state.data, action.data],
      };
    default:
      return state;
  }
};
