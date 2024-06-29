import Welcome from './component/Welcome'
import Greet from './component/Greet'
import CartComponent from './component/CartComponent';
import './component/card.css'

function App() {
  return (
    <div className="App">
      <CartComponent/>
      {/* <Welcome name="Akash" surName="Yadav">
            <h1>Hello</h1>
        </Welcome> */}
      {/* <Welcome name="Ayush" surName="Yadav"/> */}
      {/* <Greet name="Akash"/> */}
    </div>
  );
}

export default App;
