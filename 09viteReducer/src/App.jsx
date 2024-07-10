import React, { useReducer } from 'react'
import CounterOne from './component/CounterOne'
import CounterTwo from './component/CounterTwo'
import CounterThree from './component/CounterThree'
import ComponentA from './component/ComponentA'
import ComponentB from './component/ComponentB'
import ComponentC from './component/ComponentC'
import DataFetchingOne from './component/DataFetchingOne'
import DataFetchingTwo from './component/DataFetchingTwo'

export const CountContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <DataFetchingTwo/>

      {/* <DataFetchingOne/> */}

      {/* <CountContext.Provider value={{currentCount: count, dispatcher: dispatch}}>

        Count: {
          count
        }
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </CountContext.Provider> */}
      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne/> */}
    </div>
  )
}

export default App
