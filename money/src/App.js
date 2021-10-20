import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';



function App() {

  const [initialMoney, setInitialMoney] = useState( initialState: 100)

  return (
    <h1>Hello from app</h1>
    <Header/>
    
  );
}

export default App;
