import './App.css';
import React, { useState , useEffect} from 'react';

function App() {

  const LOCAL_STORAGE_KEY_VISIT = 'visited'

  const [showWelcome, setShowWelcome] = useState(0)

  function onEntryClick() {
    setShowWelcome(Number(showWelcome+1))
    console.log("Onclick : " + showWelcome)
  }

  useEffect(()=> {
    const tempShow = localStorage.getItem(LOCAL_STORAGE_KEY_VISIT)
    setShowWelcome(tempShow)
    console.log("Use Effect Grabbed " + showWelcome )
  }, [])

  return (
    <>
    {showWelcome == 0 && <button className='EntryMessage' onClick={onEntryClick}>Who am I?</button>}
    </>
    
  );
}

export default App;
