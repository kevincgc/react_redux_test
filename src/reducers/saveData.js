const initialData = {
  index: 0,
  show: false,
  data: [{
    name: "bear",
    description: "stuffed bear",
    price: "$10",
    image: "https://m.media-amazon.com/images/I/71iTy3aI7HL._AC_SX679_.jpg"
  }, {
    name: "tractor",
    description: "green tractor",
    price: "$15",
    image: "https://m.media-amazon.com/images/I/61kjzOuXQpL._AC_UL600_QL65_.jpg"
  }],
};

export default function saveData(state = initialData, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case 'SELECT_CARD':
      return {
        ...state,
        index: action.index
      }
    case 'SHOW_DETAILS':
      return {
        ...state,
        show: action.show
      }
    case 'REMOVE_CARD':
      return {
        ...state,
        data: state.data.filter((_, i) => i !== action.index)
      }
    default:
      return state;
  }
};
