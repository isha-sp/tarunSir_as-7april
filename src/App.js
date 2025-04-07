// import logo from './logo.svg';
import './App.css';
import useNetworkStatus from './hooks/useNetworkStatus';

function App() {

  const status = useNetworkStatus();

  return (
    <div className="App">
      {status? "online" : "offline"}   
    </div>
  );
}

export default App;
