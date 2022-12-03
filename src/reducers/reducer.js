import {ADD, SUBTRACT, MULTIPLY, CLEAR} from "../App"

//-----------             ---------------             -----------------           ----------------------------
const reducer = (state, action) => { //Used to help regulate the state.
  switch (action.type) { 
    case ADD: //Addition
      return { //update state
        ...state,
        currentValue: state.currentValue + action.payload //new val
      }

    case SUBTRACT: //Subtraction
      return { //update state
        ...state,
        currentValue: state.currentValue - action.payload //new val
      }
    
    case MULTIPLY: //Multplication
        return { //update state
          ...state,
          currentValue: state.currentValue * action.payload //new val
        }

    case CLEAR: //Clear
        return { //update state
          ...state,
          currentValue: action.payload //new val
        }

    default: //If the function could not be found,
      return state; //Just return the same thing unfazed.
  }
};

//Exports:
export default reducer;
