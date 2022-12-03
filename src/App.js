import React, { useState, useReducer } from "react";
import reducer from "./reducers/reducer";

const initialState = { //Overall starting data. (inital data that is used.)
  currentValue: 0,
};
const errorText = "" //Used to keep track of any errors

function App() {
  //vars
  const [state, dispatch] = useReducer(reducer, initialState); 
  const [currError, setError] = useState(errorText) //Used to keep track of any errors.
  //--------------------                     ---------------------\\
  //FUNCTIONS:
  function WARN(type){ //Used to let the developer know what is wrong internally.
    console.error(`${type} action can NOT be found`)
  }

  const functions = { //Any function that uses dispatch.
      [ADD != null ? ADD : WARN("ADD")]: function () { //ADD
        dispatch({type: ADD, payload: 1}) //update state (add 1).
      },

      [SUBTRACT != null ? SUBTRACT : WARN("SUBTRACT")]: function() { //SUBTRACT
        dispatch({type: SUBTRACT, payload: 1}) //update state (subtract 1).
      },

      [MULTIPLY != null ? MULTIPLY : WARN("MULTIPLY")]: function() { //MULTIPLY
        dispatch({type: "MULTIPLY", payload: Math.floor(Math.random() * 4 + 1) }) //update state (multiply random number 1-5)
      },

      [CLEAR != null ? CLEAR : WARN("CLEAR")]: function() { //CLEAR
        dispatch({type: CLEAR, payload: 0}) //update state (reset to 0)
      }
  }

  //Used to handle any responses from the buttons
  const handleResponse = (res) => {
    let found = false; //Used to determine if a function is found corresponding with a button request.
    for (let resName in functions) {
      //Loop through the functions and search for a corresponding request to 'res'
      if (resName == res) { //eslint-disable-line

        //If found,
        functions[resName](); //invoke the corresponding function.
        found = true; //indicate that the function has been found.
        break;
      }
    }

    if (found === false) { //IF the function was not found
      console.error(`${res} is NOT a function`);
      setError(`${res} is NOT a function`) //Let the user know by updating state.

      setTimeout(()=>{
        //Clear the error after a few moments.
          setError("")
      }, 2635)
    }
  };

  //--------------------                      ---------------------------\\
  //Start:
  return (
    <div className="App">
      <textarea
        rows="1"
        value={state.currentValue}
        id="total"
        type="text"
        name="ans"
      ></textarea>
     
      <br />

      {/** ADDITION BUTTON **/}
      <button
        className="btn"
        type="button"
        onClick={() => {
          handleResponse(ADD);
        }}
      >
        +
      </button>
      {/** ------------------ **/}

      {/** MINUS BUTTON **/}
      <button 
        type="button" 
        className="btn" 
        onClick={()=>{
          handleResponse(SUBTRACT)
        }}
      >
        -
      </button>
      {/** ------------------ **/}

      {/** MULTIPLY BUTTON **/}
      <button
        type="button"
        onClick={()=>{
            handleResponse(MULTIPLY)
          }}
        className="btn"
      >
        *
      </button>
      {/** ------------------ **/}

      {/** CLEAR BUTTON **/}
      <button 
        type="button" 
        className="btn"
        onClick={()=>{
          handleResponse(CLEAR)
        }}
      >
        CE
      </button>
      {/** ------------------ **/}

      {/** ERROR LABEL **/}
      <p className="error">{currError}</p>
      {/** ------------------ **/}
    </div>
  );
}

//Exports:
//-----ACTIONS:
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const CLEAR = "CLEAR";
export const MULTIPLY = "MULTIPLY";
//--  --  --  --   --
export default App;
