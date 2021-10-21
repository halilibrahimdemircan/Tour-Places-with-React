import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';



function App() {

  const [initialMoney, setInitialMoney] = useState(100)

  return (
    <div>
      <h1>Hello from app</h1>
      <Header/>
    </div>
    
    
  );
}

export default App;
