import logo from './logo.svg';
import './App.css';
import { MainComponent } from './components/main';
import { PanelContextProvider } from './context';

function App() {
  return (
    <div className="App">
      <PanelContextProvider>
        <MainComponent />
      </PanelContextProvider>
    </div>
  );
}

export default App;
