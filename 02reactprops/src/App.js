import Welcome from './component/Welcome'
import Greet from './component/Greet'

function App() {
  return (
    <div className="App">
      <Welcome name="Akash" surName="Yadav">
            <h1>Hello</h1>
        </Welcome>
      <Welcome name="Ayush" surName="Yadav"/>
      <Greet name="Akash"/>
    </div>
  );
}

export default App;
