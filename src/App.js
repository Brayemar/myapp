import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning reactjs</h1>
        <h2>React is Fun</h2>

      </header>
       {/* Below we render/display/show our components */}
        <Firstcomponent />
        <Secondcomponent/>
        <Thirdcomponent/>
        <Fourthcomponent/>
    </div>
  );
}

export default App;

// jsx

// Create two other components i.e Contact us and Help components and style them with your own content. Render them on App.js component.