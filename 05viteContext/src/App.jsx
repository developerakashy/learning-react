import Hero from "./component/Hero"
import ErrorBoundary from "./component/ErrorBoundary"
import HoverCounter from "./component/HoverCounter"
import ClickCounter from "./component/ClickCounter"
import HoverCounterTwo from "./component/HoverCounterTwo"
import ClickCounterTwo from "./component/ClickCounterTwo"
import User from "./component/User"
import Counter from "./component/Counter"
import ComponentC from "./component/ComponentC"
import { UserProvider } from "./component/UserContext"

function App() {


  return (
    <>
      <UserProvider value={'Akash'}>
        <ComponentC/>
      </UserProvider>

      {/* <Counter render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User name={(isLoggedIn) => isLoggedIn ? 'Akash' : 'Guest'}/> */}
      {/* <ClickCounter name='Akash'/>
      <HoverCounter /> */}

      {/* <ErrorBoundary>
        <Hero heroName='BatMan'/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='superMan'/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Joker'/>
      </ErrorBoundary> */}



    </>
  )
}

export default App
