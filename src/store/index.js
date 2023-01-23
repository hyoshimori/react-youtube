import React, {createContext, useReducer} from 'react'


// ********** NOTE ********** //
// You can also write like this:
// const [state, dispatch] = useReducer(reducer, {popular: []});
// ********** NOTE ********** //

const initialState = {
  popular: []
}

const reducer = (state, action) => {
  switch(action.type){
  case "SET_POPULAR":
    return { popular: action.payload.popular}
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
