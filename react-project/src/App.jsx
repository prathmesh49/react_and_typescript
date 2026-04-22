import { useState } from 'react'
import './App.css'
import Card from './comps/Card';

function App() {
  const what = useState(0);
  console.log(what);

  return (
    <>
    <h1>Helllow</h1>
     <Card value="Naveen" />
    </>
  )
}

export default App
