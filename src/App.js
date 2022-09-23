import './App.css';
import Tab from './component/Tab.js'
import Accordion from './component/Accordion.js'
import List from './component/List.js'

function App() {
  return (
    <div className="main flex">
      <Tab />
      <ul className="accordion-wrap">
        <Accordion idx={1} />
        <Accordion idx={2} />
      </ul>
      <List />
    </div>
  );
}

export default App;
