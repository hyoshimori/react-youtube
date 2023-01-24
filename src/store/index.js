import React, {createContext, useReducer} from 'react'

// ********** NOTE ********** //
// You can also write like this:
// const [state, dispatch] = useReducer(reducer, {popular: []});
// ********** NOTE ********** //

const initialState = {
  popular: [],
  selected: {}
}


// ********** NOTE ********** //
// To keep the immutability of the code, first, we need to make a copy of a variable
// with spread operatpor. Then, you can assign the new info passed from payload.
// ********** NOTE ********** //
const reducer = (state, action) => {
  switch(action.type){
    case "SET_POPULAR":
      const popularState = {...state};
      // Create a copy of the state using the spread operator
      popularState.popular = action.payload.popular
      // Update the "popular" property on the copy
      return popularState
      // Return the copy
    case "SET_SELECTED":
      const selectedState = {...state};
      // Create a copy of the state using the spread operator
      selectedState.selected = action.payload.selected
      // Update the "selected" property on the copy
      return selectedState
      // Return the copy
  default:
    return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
  // ********** NOTE ********** //
  // This default value is there to avoid throwing an error when trying to
  // access setGlobalState via the Store.Consumer component, when it's not
  // provided by the StoreProvider component.
  // ********** NOTE ********** //
})

export const StoreProvider = ({children}) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <Store.Provider value ={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  )
}
