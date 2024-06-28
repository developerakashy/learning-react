import Welcome from './component/Welcome'
import Greet from './component/Greet'
import Count from './component/Count'
import Message from './component/Message'
import FunctionClick from './component/FunctionClick'
import ClassClick from './component/ClassClick'
import ParentComponent  from './component/ParentComponent'
import UserGreeting from './component/UserGreeting'
import List from './component/List'
import PersonList from './component/PersonList'
import Stylesheet from './component/Stylesheet'
import Inline from './component/Inline'
import './component/appStyles.css'
import styles from './component/appStyles.module.css'



function App() {

  return (
    <>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
      <Stylesheet primary={true}/>
      {/* <PersonList/> */}
      {/* <List/> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Message/> */}
      {/* <Count/> */}
      {/* <Welcome name="Akash" surName='Yadav'>
          <p>Hello</p>
      </Welcome> */}
      {/* <Welcome name="Ayush" surName="Yadav" >
          <button>Child</button>
      </Welcome> */}
      {/* <Welcome name="Sumit" surName="Yadav"/> */}
      {/* <Greet name="Akash"/> */}
    </>
  )
}

export default App
