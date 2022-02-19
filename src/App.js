import React from 'react';
import './App.css';
import Form from './form';
import {useState} from 'react';
import RenderWords from './RenderWords';

function App() {
  const [dict, setdict] = useState({})
  // console.log(dict)
  // console.log(wordList)

  return (
    <div className="App">
      <h3>Wordle Breaker</h3>
      <Form dict={dict} onChange={(e) => {setdict(e)}}/>
      <RenderWords dict={dict}/>
    </div>
  );
}

export default App;
