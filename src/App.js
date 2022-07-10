import './App.css';
import BreakerList from './components/BreakerList'
import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [breakerList, setBreakerList] = useState(
    [ {"question" : "Is this working?", "tags" : ["code", "test", "breaker"]},
  {"question" : "Is this really working?", "tags" : ["code", "test", "second"]}])

   function saveBreaker(e) {
     //e.preventDefault
     const prevBreakerList = breakerList
     const newBreaker = {}
     newBreaker.question = document.getElementById("question").value
     const newTags = document.getElementById("tags").value.split(" ")
     newBreaker.tags = newTags
      axios({
        method: 'post',
        url: 'http://localhost:4402/api/breakers/',
        data: {
          ...newBreaker
        }
      }).then(
        setBreakerList([...prevBreakerList,  newBreaker]))
  } 

  return (
    <>
      <label htmlFor ="question">Question</label>
      <input type="text" name="question" id="question"/>
      <label htmlFor="tags">Tags</label>
      <input type="text" name="tags" id="tags" />
      <button>Clear</button>
      <button onClick={saveBreaker}>Save</button>
      <hr />
      <BreakerList breakerList={breakerList}/>
    </>
  );
}

export default App;
