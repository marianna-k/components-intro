// hooks are of typescript code and don't return jsx
//returns only values or functions

import {useState} from "react";

export const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);
  const increase = () => {
      setCount (count + 1);
  }

  const decrease = () => {
      if (count > 0){
          setCount (count - 1);
      }
  }

  const reset = () => {
      setCount (initialValue); //0
  }

  //return: it doesn't return jsx

  return {
          count,
          increase,
          decrease,
          reset
  }
}