import { useReducer } from 'react';

const actionTypes = {
  changeInput: 'CHANGE INPUT',
  clearValues: 'CLEAR VALUES',
  editInput: 'EDIT VALUES',
  setImage: 'SET IMAGE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.changeInput:
      return {
        ...state,
        [action.name]: action.value,
      };
    case actionTypes.clearValues:
      return {
        ...action.initialValues,
      };
    case actionTypes.editInput:
      return {
        ...state,
        [action.name]: action.value,
      };
    case actionTypes.setImage:
      return {
        ...state,
        image: action.reader,
      };
    default:
      return state;
  }
};

export const useInput = (initialValues = '') => {
  const [inputState, dispatch] = useReducer(reducer, initialValues);

  const handleChangeInput = (e) => {
    dispatch({
      type: actionTypes.changeInput,
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearValues = () => {
    dispatch({ type: actionTypes.clearValues, initialValues });
  };

  const handleEditInput = (editedValues, event) => {
    for (const property in editedValues) {
      dispatch({
        type: actionTypes.editInput,
        name: property,
        value: event[property],
      });
    }
  };

  const handleSetImage = (element) => {
    const files = element;
    const reader = new FileReader();
    reader.onload = function () {
      dispatch({
        type: actionTypes.setImage,
        reader: reader.result,
      });
    };
    reader.readAsDataURL(files);
  };

  return {
    inputState,
    handleChangeInput,
    handleClearValues,
    handleEditInput,
    handleSetImage,
  };
};
