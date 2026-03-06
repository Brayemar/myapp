import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactus from './components/Contactus';
import Help from './components/Help';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';

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
        <Contactus/>
        <Help/>
        <Thirdcomponent/>
        <Fourthcomponent/>
        <Fifthcomponent/>
        <Sixthcomponent/>
    </div>
  );
}

export default App;

// jsx

// Create two other components i.e Contact us and Help components and style them with your own content. Render them on App.js component.

// npm start => node package module
// npx => node package execute

// App.js is our root component 