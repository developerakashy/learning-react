import React from 'react'
import ComponentC from "./component/ComponentC"
import ComponentF from './component/ComponentE'

const UserContext = React.createContext()
const ChannelContext = React.createContext()

function App() {

  return (
    <>
      <UserContext.Provider value={'Akash'}>
        <ChannelContext.Provider value={'CodeEvolution'}>
            <ComponentC/>
            <ComponentF/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  )
}


export {UserContext, ChannelContext}
export default App
